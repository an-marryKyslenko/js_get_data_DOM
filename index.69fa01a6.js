function t(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=Array(r);e<r;e++)n[e]=t[e];return n}var r=document.querySelectorAll(".population"),e=document.querySelector(".total-population"),n=document.querySelector(".average-population"),o=((function(r){if(Array.isArray(r))return t(r)})(r)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(r)||function(r,e){if(r){if("string"==typeof r)return t(r,void 0);var n=Object.prototype.toString.call(r).slice(8,-1);if("Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(r,void 0)}}(r)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).reduce(function(t,r){return t+ +r.innerText.split(",").join("")},0),i=Math.floor(o/r.length);e.innerText=o.toLocaleString("en-US"),n.innerText=i.toLocaleString("en-US");
//# sourceMappingURL=index.69fa01a6.js.map
