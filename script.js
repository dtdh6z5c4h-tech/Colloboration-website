const body=document.body, theme=document.getElementById("theme"), modal=document.getElementById("modal"), form=document.getElementById("form");
const saved=localStorage.getItem("laiba-theme"); if(saved==="dark"){body.classList.add("dark");theme.textContent="☀"} 
theme.onclick=()=>{body.classList.toggle("dark");const dark=body.classList.contains("dark");theme.textContent=dark?"☀":"☾";localStorage.setItem("laiba-theme",dark?"dark":"light")};
function openModal(){modal.classList.add("open");document.body.style.overflow="hidden"}
function closeModal(){modal.classList.remove("open");document.body.style.overflow=""}
document.querySelectorAll("[data-open]").forEach(x=>x.onclick=openModal);
document.querySelectorAll("[data-close]").forEach(x=>x.onclick=closeModal);
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
form.onsubmit=e=>{e.preventDefault();const d=new FormData(form);
const msg=`Hi Laiba AK! I'd like to discuss a collaboration.

Name: ${d.get("name")}
Business / Brand: ${d.get("business")}
Location: ${d.get("location")}
My WhatsApp: ${d.get("phone")}
Collaboration: ${d.get("type")}

Business / Product details:
${d.get("details")}

I found the collaboration details on the Laiba AK website.`;
window.open("https://wa.me/923400506456?text="+encodeURIComponent(msg),"_blank");
};