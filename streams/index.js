import {createReadStream, createWriteStream} from "fs"
import path from "path"
import { buffer } from "stream/consumers";
const readPath=path.join(import.meta.dirname,"input.txt");
const writePath=path.join(import.meta.dirname,"output.txt");
const readableStream=createReadStream(readPath,{
    encoding:"utf-8",
    highWaterMark:16
});
const writeableStream=createWriteStream(writePath);
readableStream.pipe(writeableStream)

readableStream.on("error",(err)=>{
    console.log("Error:",err);
})
writeableStream.on("error",(err)=>{
    console.log("Error:",err);
})

readableStream.on("data",(chunk)=>{
    console.log("Data read:",chunk);
    console.log(Buffer.from(chunk));
})
writeableStream.on("data",(chunk)=>{
    console.log("Data written:",chunk);
    console.log(Buffer.from(chunk));
})