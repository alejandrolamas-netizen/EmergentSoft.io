import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const app=express(), here=path.dirname(fileURLToPath(import.meta.url));
const port=Number(process.env.PORT||3000), apiKey=process.env.GEMINI_API_KEY, model=process.env.GEMINI_MODEL||"gemini-2.5-flash";
app.disable("x-powered-by");app.use(express.json({limit:"20kb"}));app.use(express.static(here));
app.get("/api/health",(_req,res)=>res.set("Cache-Control","no-store").json({ok:true,modelConfigured:Boolean(apiKey),model:apiKey?model:null}));
app.post("/api/analyze",async(req,res)=>{
 const query=typeof req.body?.query==="string"?req.body.query.trim():"";
 const mode=["antagonic","evolution","integral"].includes(req.body?.mode)?req.body.mode:"integral";
 if(!query||query.length>4000)return res.status(400).json({error:"La pregunta es obligatoria y debe tener hasta 4000 caracteres."});
 if(!apiKey)return res.status(503).json({error:"Falta GEMINI_API_KEY en el entorno del servidor. No pongas la clave en el HTML."});
 const modeText={antagonic:"Presentá dos perspectivas relevantes en tensión, con argumentos fuertes y sin caricaturizarlas.",evolution:"Explicá antecedentes, cambios en el tiempo y evidencia histórica necesaria.",integral:"Ofrecé síntesis plural, trade-offs, incertidumbres y preguntas abiertas."}[mode];
 const systemPrompt="Sos Actualism Synthesis, asistente editorial para explorar perspectivas, no árbitro de la verdad. "+modeText+" Respondé en español y devolvé únicamente JSON con claves string perspective_a, perspective_b, synthesis, verification_needed. No inventes fuentes, citas, acontecimientos, normas, cifras ni declaraciones. Diferenciá hechos aportados de hipótesis. Si faltan fuentes, decilo explícitamente.";
 try{
  const upstream=await fetch("https://generativelanguage.googleapis.com/v1beta/models/"+encodeURIComponent(model)+":generateContent?key="+encodeURIComponent(apiKey),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({systemInstruction:{parts:[{text:systemPrompt}]},contents:[{role:"user",parts:[{text:query}]}],generationConfig:{responseMimeType:"application/json",temperature:0.3,maxOutputTokens:1200}}),signal:AbortSignal.timeout(30000)});
  const payload=await upstream.json().catch(()=>({}));
  if(!upstream.ok){console.error("Gemini API error:",upstream.status,payload?.error?.status||"unknown");return res.status(502).json({error:"El proveedor de IA rechazó la solicitud. Revisá la configuración y los límites del proyecto."})}
  const outputText=payload?.candidates?.[0]?.content?.parts?.map(p=>p.text||"").join("");
  if(!outputText)return res.status(502).json({error:"El modelo no devolvió contenido utilizable."});
  let parsed;try{parsed=JSON.parse(outputText)}catch{return res.status(502).json({error:"La respuesta del modelo no tuvo el formato esperado."})}
  const output={};for(const k of ["perspective_a","perspective_b","synthesis","verification_needed"])output[k]=typeof parsed[k]==="string"?parsed[k].slice(0,5000):"";
  res.set("Cache-Control","no-store").json(output);
 }catch(error){console.error("Analysis request failed:",error.name||"Error");res.status(504).json({error:"No se pudo completar el análisis dentro del tiempo esperado."})}
});
app.listen(port,()=>console.log("Actualism listening on http://localhost:"+port));