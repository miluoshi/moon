"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9662],{9220:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7378),r=a(9619);function l(e){let{className:t,status:a}=e;switch(a){case"experimental":return n.createElement(r.Z,{className:t,text:"Experimental",variant:"failure"});case"in-development":return n.createElement(r.Z,{className:t,text:"In development",variant:"success"});case"coming-soon":return n.createElement(r.Z,{className:t,text:"Coming soon",variant:"warning"});case"new":return n.createElement(r.Z,{className:t,text:"New",variant:"info"});default:return null}}},3453:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7378),r=a(8944),l=a(1884);function s(e){let{children:t,href:a,color:s}=e;return n.createElement(l.default,{href:a,className:(0,r.Z)("inline-flex items-center justify-center px-2 py-1 sm:px-3 sm:py-2 text-base font-bold rounded-md text-white hover:text-white hover:scale-105 md:text-lg transition-transform",s??"bg-purple-600")},t)}},5969:(e,t,a)=>{a.d(t,{Z:()=>A});var n=a(7378),r=a(8944),l=a(1792),s=a(9187),i=a(658),o=a(9220);const c={1:"from-purple-600 to-blurple-600",2:"from-pink-400 to-red-400",3:"from-teal-400 to-slate-100",4:"from-yellow-300 to-green-600"},m={1:"text-blurple-300",2:"text-pink-500",3:"text-teal-600",4:"text-green-600"};function A(e){let{header:t,description:a,features:A,reversed:d,tier:p}=e;return n.createElement("div",null,n.createElement("div",{className:"relative py-4 sm:py-5 lg:py-6"},n.createElement("div",{className:"mx-auto max-w-md px-2 sm:max-w-3xl sm:px-3 lg:max-w-7xl lg:px-4"},n.createElement("div",{className:(0,r.Z)("md:flex items-center justify-between",d&&"flex-row-reverse")},n.createElement("aside",{className:(0,r.Z)("md:w-1/3 mx-2 md:mx-0 p-2 sm:p-3 md:p-4 drop-shadow z-0 rounded-t-lg text-center",d?"md:rounded-tl-none md:rounded-tr-lg md:rounded-bl-none md:rounded-br-lg bg-gradient-to-bl md:pl-0 md:text-left":"md:rounded-tl-lg md:rounded-tr-none md:rounded-bl-lg md:rounded-br-none bg-gradient-to-br md:pr-0 md:text-right",c[p])},n.createElement("h2",{className:(0,r.Z)("m-0 px-1 py-0.5 inline-block text-base font-semibold uppercase tracking-wider text-white bg-black/20 rounded",d?"md:rounded-tl-none md:rounded-bl-none md:pl-4":"md:rounded-tr-none md:rounded-br-none md:pr-4")},t),n.createElement(s.Z,{className:(0,r.Z)("mt-2 text-white",d?"md:ml-4":"md:mr-4"),level:2},a)),n.createElement("section",{className:"md:w-2/3 bg-white rounded-lg p-2 md:p-3 lg:p-4 drop-shadow z-10"},n.createElement("ul",{className:"m-0 p-0 list-none grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 lg:gap-4"},A.map((e=>n.createElement("li",{key:e.title,className:"flex"},n.createElement("div",{className:"pt-1 w-9 shrink-0 grow-0"},n.createElement(l.Z,{icon:e.icon,className:(0,r.Z)("text-5xl justify-center flex",m[p]),style:{maxWidth:54}})),n.createElement("div",{className:"ml-1"},n.createElement(s.Z,{level:4,className:"text-gray-900"},e.title),e.status&&n.createElement("p",{className:"m-0"},n.createElement(o.Z,{status:e.status})),n.createElement(i.ZP,{className:"mt-1",variant:"muted"},e.description)))))))))))}},5655:(e,t,a)=>{a.r(t),a.d(t,{default:()=>K});var n=a(7378),r=a(1884),l=a(1947),s=a(1792),i=a(9187),o=a(658),c=a(9220);function m(e){let{header:t,features:a}=e;return n.createElement("div",{className:"bg-white"},n.createElement("div",{className:"relative py-4 sm:py-6 lg:py-8"},n.createElement("div",{className:"mx-auto max-w-md px-2 sm:max-w-3xl sm:px-3 lg:max-w-7xl lg:px-4"},n.createElement(i.Z,{align:"center",className:"text-gray-900",level:3},t),n.createElement("dl",{className:"mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6"},a.map((e=>n.createElement("div",{key:e.title,className:"relative"},n.createElement("dt",null,n.createElement(s.Z,{icon:e.icon,className:"absolute h-3 w-3 text-purple-500",style:{maxWidth:16}}),n.createElement(i.Z,{className:"ml-4 text-gray-900",level:5},e.title)),n.createElement(o.ZP,{as:"dd",className:"mt-1 ml-4",variant:"muted"},e.status&&n.createElement("p",{className:"mb-1"},n.createElement(c.Z,{status:e.status})),e.description))))))))}var A,d,p,u,g,E,x,f=a(5969);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},h.apply(this,arguments)}const w=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",xmlSpace:"preserve",viewBox:"0 0 82.38 81.99",role:"img","aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,A||(A=n.createElement("defs",null,n.createElement("circle",{id:"a",cx:36.65,cy:45.34,r:36.65}))),d||(d=n.createElement("clipPath",{id:"b"},n.createElement("use",{xlinkHref:"#a",overflow:"visible"}))),p||(p=n.createElement("g",{clipPath:"url(#b)"},n.createElement("defs",null,n.createElement("path",{id:"c",d:"M-5 3.69h83.3v83.3H-5z"})),n.createElement("clipPath",{id:"d"},n.createElement("use",{xlinkHref:"#c",overflow:"visible"})),n.createElement("g",{clipPath:"url(#d)"},n.createElement("image",{xlinkHref:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAAPIAAAFtAAACfn/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAK8AsQMBIgACEQEDEQH/ xADAAAEBAQADAQEAAAAAAAAAAAAAAQIEBQYHAwEBAAIDAQAAAAAAAAAAAAAAAAEFAgMEBhAAAQQC AgICAgIDAAAAAAAAABECAwQBBSAGEDASE0AUFTVwIzMRAAIBAQMFDAkEAgMAAAAAAAECAxEAIQQx QVESIhAgMEBhcYGRoTJCE7HRUmJygiNDBfCiMySSsuKTNBIAAgACBwYGAgMAAAAAAAAAAQIAERAh MUFREgMgMIGRobFhccHRIjJwUmJyQ//aAAwDAQACEQMRAAAA+gAAHV5uz6/y/DsHf8LrXW5U4zNz +X0rF6ztvnv6cr6C8939e0NQAABm+Q3P36OLpUbFIVBUFQXmcJi97yfA+0p3KHKAHX5Oo6BL5UbF QVBUFQVKAOXxGL6HvzHp6IGo8V6vwNiqLNUBBUFQW5pUFSgGvffP/TcL0IqXQeV7zobtpl0NSCpD TI0gqDSC3NKiV7Lrf1wfQx554vp+36a+aZbZqQ0yNMjTNNMjVzS3NRbmlQfQBQPM9B63yFsqTpnU grI0yNsjVyNs00zTVyNft+HZ4R7kefcP5z9S8DYOqkWU1kVkauKaZpq5G2bLVzTTNNep8v8AROKO QKk6zs2T5TPT+XvJJNjTI0zTTNNXNNXNNM2WrnnYu59X+f6UcBqAZ8H77O58nnpfM3E2GxUGrmmr mmkpbOxh+Pv3LqIDlAAAOl7pk+Z9d9c8/wB7wd7/AKzrnh3U2l/fsNbqf39P6Lmjz3ptq8GsAB// 2gAIAQIAAQUA8Mje/MWuwNrQNPrYOrwuJNczJLDJFnhXrumdFEyNvFzGuxaq5iz4YzL3QxNiZzc3 Dmzw5ikNdEufTfi+UZTb8YPTI35Rlf8A4+r/AElN3yg9MjvjGa+RM+m/L8Yxj8sdFK2RnNzsNbPL mWTxBO6J0crJG8XPa3Fq1mXPBj3MzHsMDbMLjGcZw6eJpJsGYJZpJc+f/9oACAEDAAEFAP8AAn// 2gAIAQEAAQUA5ZzjGLW91tYn7XNkk3+1kHbPYuz/ACOwGbvasIe03WZq9mozZimimZ7Njv6lPNzb XrufRBZnrP13Z8OzHIyRnoe9jG7bsMkzvZrtra176N+veh5Oc1rd1uX3n+6ldnoz6+/Bfr8ex7X7 H/ga3YS6+zDNHPF53WxxQpqufwesbL4P87+9m3sPwo5HRSUrTLdU2dr9Sguc54KL7uqW/lGdtnyy r4UUUUUUUUUX09fsfRtDtsmM3lFFFFFFFFFFFFF51ZPqtHaf7ZRRRRRRRRRRRRRRef8AI0ztP9so ooooooooooooooovH+OpncI8NvqKKKKKKKKKKKKKKKKL5qR/dbO4wZfTUUUUUUUUUUUUUUUUUXz1 2DM+2NrU/d1+VxlRRRRRRRRRRRRRRRRfPUKnxi8dlofpbNRRRRRRRRRRRRRRRfMMT5paNVlOp43+ rxsqOVxlRRRRRRRRRRRRePU9X838O26X6nqKKKKKKKKKLy1Gsl2VuCGKvFwc1r29i0Emul8L7NfQ sbCxrddBrqvJ7GPbveqS18+zVaW5s36/XVddB6dv1ijss7HQ7PW+mrTtXJNV09rSOKOGP15RL+u6 lbdZ65rsEurniHxujy3GXZioTSZr6CN+ael6vAU8UsQc/wD/2gAIAQICBj8AoyoCxieq3BfeKtNe NfePqvKK9NOAl2iemxQ4GsRJxLA3HZkKlH2bCMqCXc+e0VYZgbjGZa0N+HgaQq2sZQEW604nHcFW EwajBQ2WqcRQ2obviPXdBxah6GhP5TbnumX9lIo0/wCg3f8Ap0hPCa8t0zfqpNDaZv8AkPXdBBa5 6CgMtqmcB1vtGB3BZjICswXNlgGApmKwfsMYzIZ9x57RZjlAvMZVqQdfE7OZCVMS1F4r7RU68au8 TBqit15ziWmCxxNQibmeAuGx/9oACAEDAgY/APwJ/9oACAEBAQY/AN9U5LEeb5rjwx7Xb3e2xGHg VPecluwatiPO1Acyqo7aVtrHFS1Oh2A6gbf+qb/sb122cQxzbQVv9gbfWjSVeSqnrvHZYLMGgY5z tL1r6rCSF1kQ+JSCOzhTGn15xlVTsr8TWImkIjP202U6s/TwOvBI0baVNK8+mwjx41TkEyi75l9V hJGwdGFVYGoI4Eu7BUUVZiaADlJs0GCJSHIZRczc2gcLWM60R78Td082g282Bq0prqe8p0HflmIC gVJNwAFjBCSuFQ3DO5HiPJoHDieA0IuZTkYaDYTRXHI6HKraN8cBA2wh+swzsPB0Z+XiImSpQ3Sp mZfWM1lliYMjiqkbwsv80mzEOXO3Rapy8SOAlOy+1CTmbOvTvHCmsUH00pku7x6+JpKho6MGU8oN RaLEpcJFrTQchHQdyaetGVSE+Jtle02qcp4pNg2yofMTTQ3N1GnXuQwD7rljzIP+XFYamiy1jb5h d+6m5FGKbEVTzsxu7OKwy1pqSK1T7pB3G+BPRxb+T9reqzfAno4t/H+5vXaGQU24qHnVjeevisEV 31JEW/JtMBuQYgfacqeaQZeteKw+zFWRvlF37iNyfDgVZlJT412l7RahuI4pNjWyufLTTRb26zTq 3XZFpDiPqR6Knvj/AC4mkMY1nkIVRym60WGS8RrQnSTex6TusiD+xFtwnlzr8wtQ3EZRxI/kZhsJ swA528TdH6yb0/ksMuxIf7Cgd1j4+Y5+Xn4isK1Ea3zP7K+s5rJDCoSNBRVG9KsAysKMpvBBzGzY nDjWwUhup9onwnk0H9Hhlw+HWrG9mPdVfaay4eG/O7nK7HKTvyjqGRripFQRyg2fFfjlMkBvaAXu nw+0PRwv0l1IAaPOw2RyDSeawhw60ya7nvORnY8EZU/r4o3mVRcx99c/PlsWxEWtEPvR7SdJyjp4 Hy8LE0r5wouHOcgsJvybazZRh0Oz87Z+YddliiUJGgoqqKADhDrU1aX1yUsxknw8E1dpopkRq56r XV7LVwn5jCtoWWRV0eJWb0WqJsNIAKkpiIT0ULg9lgGKmvssrf6k2AGU3Xmg6zbZeEUpUtPEuX4n Fh5/5LBwrnpMrt1VA7bBsRjosU4p3pkVKj3Vb0k2AwPl+QCaeTq6lc/curwH/9k=",width:175,height:174,overflow:"visible",transform:"matrix(.48 0 0 .48 -5.258 3.595)"})))),u||(u=n.createElement("circle",{cx:52.4,cy:30.55,r:15.75,fill:"#5341d6"})),g||(g=n.createElement("defs",null,n.createElement("circle",{id:"e",cx:66.8,cy:15.75,r:15.75}))),E||(E=n.createElement("clipPath",{id:"f"},n.createElement("use",{xlinkHref:"#e",overflow:"visible"}))),x||(x=n.createElement("g",{clipPath:"url(#f)"},n.createElement("defs",null,n.createElement("path",{id:"g",d:"M46.05-5h41.5v41.5h-41.5z"})),n.createElement("clipPath",{id:"h"},n.createElement("use",{xlinkHref:"#g",overflow:"visible"})),n.createElement("g",{clipPath:"url(#h)"},n.createElement("image",{xlinkHref:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgEAlgCWAAD/7AARRHVja3kAAQAEAAAAHgAA/+4AIUFkb2JlAGTAAAAAAQMA EAMCAwYAAALLAAADiwAABSX/2wCEABALCwsMCxAMDBAXDw0PFxsUEBAUGx8XFxcXFx8eFxoaGhoX Hh4jJSclIx4vLzMzLy9AQEBAQEBAQEBAQEBAQEABEQ8PERMRFRISFRQRFBEUGhQWFhQaJhoaHBoa JjAjHh4eHiMwKy4nJycuKzU1MDA1NUBAP0BAQEBAQEBAQEBAQP/CABEIAFoAWgMBIgACEQEDEQH/ xAC5AAEAAgMBAQAAAAAAAAAAAAACAAUDBAYBBwEAAwADAAAAAAAAAAAAAAAAAgMEAAEFEAACAgEE AgIBBQAAAAAAAAAAAQIDBBESEwUQISAiFDAxMiMVEQABAQMHCQUGBwAAAAAAAAABAgARAzAhMUFR EiIQIGFxgZHB0eEyQlIzBKGxYnKiNMITI0MURIQSAAECAQoFBAMAAAAAAAAAAAEAAhEQICExYYGR EiIyQVGh0eHwcUIjYnIT/9oADAMBAAIRAxEAAAD6BIcxaujo01buDXNNu1tVJ3nVZOSv5Id6STzS p36V5nxGqohk6MYYMjPCeuq2uY6eGKt0dvUGE+IsMhBjwHja0hFhedNzO7mrbStarmcbwosWAw14 x5MbXgsNabqt68S8pLzDyZaM5cVPLIRY0Blr8ZdnujZtZOc6SRW8dbbRkvNY+o0ao6LPfZzdXWMk V0kiy//aAAgBAgABBQArx9SNVaHRVIuxpQRRH2mJiND8Zc9fqKZFkRDX2rf1REiIc/7IS2tESJOy MI80uUr3kdw+TS3k3H//2gAIAQMAAQUAKsZMjTUiWPTJXYzr8Q0ThYRsN45HCuV2aSjcRuFachu9 5DcbFaQtI2CmbzIp5I+04yIyINs09GTwGlZDjIbdD//aAAgBAQABBQDzkdhj0OzuMht9pnEe3zou nvFrTfTfH4SlGEczPncMaGhjKrraZ9f2cMteewynZNjGMYxkJyrn1+YszHMy500DGMYxjGdRlfj5 h2k/sMYxjGMZrof6EjsnrkDGMYxjH57OL5RjGMYxj8fgM7GrfQMYxjGMZh47ycoaTWTRKi1jGMYx jOkwnTV4yceORXdTZTNjGMYzq+qlZL4W013QyOqsiWV2VtjKuvy7nidPRT+g/wBrSn+fx//aAAgB AgIGPwBRfgtrbxFbQPahZm6m9RJmPCqbl+EM93JCaDyaRjBCyaG/gXdQrDMzOX9eMarOUmmq2pUh uPhaQy8+F9kY+qpP/9oACAEDAgY/AFF5uC2NvEVsA/WhZmnM3qJImbD47vCImg2I20zqNzauygaC JaJfs3cMu5aS+9o7qkuw8rTVJ//aAAgBAQEGPwDLdffXYmrWWwJSgby3m/SnkzysL0FI/C5gI8N1 qkcjza/CWFp0VaxVmlSi5InJa5DemHuKtecFwlFChWOLflrwRwJxUrSnMMFJwIM/xHpIJWguUkvS dIYRKFpwxBp65FKHaOFOsySQS6HFwK20HfkQiwFR2zcJJ4aj+p/J22M6xIHGT/zMhVRS7cesnQfs n0jzLNTXxTDL9hpkocFzwoi98opyEGcGYhig9mlJtEifURA6JFDkg0hHXKUKmPdVYWuRA41WHVnj 1HqEuhidCDMVG06M25EDx7mfAN9PhMyuTOiJKTpDsuGGUjxKwj2sFxv1Ygt7I2V7ZA8aGT9rT3+D HyqP26c7/9k=",width:88,height:87,overflow:"visible",transform:"matrix(.48 0 0 .48 45.622 -5.045)"})))))};var b;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},y.apply(this,arguments)}const v=e=>{let{title:t,titleId:a,...r}=e;return n.createElement("svg",y({viewBox:"0 0 174 37",xmlns:"http://www.w3.org/2000/svg",xmlSpace:"preserve",role:"img","aria-labelledby":a},r),t?n.createElement("title",{id:a},t):null,b||(b=n.createElement("path",{fill:"currentColor",d:"M77.543.376c-10.09 0-18.26 8.18-18.26 18.26s8.18 18.26 18.26 18.26c10.09 0 18.26-8.18 18.26-18.26S87.633.376 77.543.376zm0 29.44c-6.17 0-11.18-5-11.18-11.18 0-6.17 5-11.18 11.18-11.18s11.18 5 11.18 11.18-5.01 11.18-11.18 11.18zm41.27-29.44c-10.09 0-18.26 8.18-18.26 18.26s8.18 18.26 18.26 18.26c10.09 0 18.26-8.18 18.26-18.26s-8.17-18.26-18.26-18.26zm0 29.44c-6.17 0-11.18-5-11.18-11.18 0-6.17 5-11.18 11.18-11.18s11.18 5 11.18 11.18-5.01 11.18-11.18 11.18zM39.133.376c-4.76 0-9.01 2.16-11.83 5.55-2.83-3.39-7.08-5.55-11.83-5.55-8.51 0-15.41 6.9-15.41 15.41v21.12h7.09v-21.12a8.32 8.32 0 0 1 8.32-8.32c4.39 0 7.98 3.41 8.29 7.72-.01.2-.03.4-.03.6v21.12h7.15v-21.12c0-.2-.02-.4-.03-.6.31-4.31 3.9-7.72 8.29-7.72a8.32 8.32 0 0 1 8.32 8.32v21.12h7.09v-21.12c-.02-8.51-6.92-15.41-15.42-15.41zm118.09 0c-8.51 0-15.41 6.9-15.41 15.41v21.12h7.09v-21.12a8.32 8.32 0 0 1 16.64 0v21.12h7.09v-21.12c0-8.51-6.9-15.41-15.41-15.41z"})))};var R=a(615),N=a(728),Q=a(3453),B=a(5773);const M="$ moon run :build";function I(e,t){const a=Math.ceil(e-50);return Math.floor(Math.random()*(Math.floor(t-100)-a+1))+a}function j(e){return e>1e3?e/1e3+"s":`${e}ms`}const k=[[["theme-tokens:build",I(450,800)]],[["design-system:build",I(250,1e3)],["accessibility:build",I(350,800)],["test-utils:build",I(250,700)]],[["data-layer:build",I(500,1e3)],["server:build",I(1400,2100)]],[["client:build",I(1300,1900)]],[["web:build",I(850,2150)],["mobile:build",I(750,1550)]]];function Z(e){let{type:t,time:a,message:r}=e;return n.createElement("li",{className:"list-none"},"start"===t&&n.createElement(n.Fragment,null,n.createElement("span",{className:"text-gray-900"},"\u25aa"),n.createElement("span",{className:"text-gray-800"},"\u25aa"),n.createElement("span",{className:"text-gray-700"},"\u25aa"),n.createElement("span",{className:"text-gray-600"},"\u25aa")," "),"finish"===t&&n.createElement(n.Fragment,null,n.createElement("span",{className:"text-purple-700"},"\u25aa"),n.createElement("span",{className:"text-purple-600"},"\u25aa"),n.createElement("span",{className:"text-purple-500"},"\u25aa"),n.createElement("span",{className:"text-purple-400"},"\u25aa")," "),r,a&&n.createElement("span",{className:"text-sm text-gray-700"}," (",j(a),")"))}function F(){const e=(0,n.useRef)(null),[t,a]=(0,n.useState)(0),[r,l]=(0,n.useState)(-1),[s,i]=(0,n.useState)([]),[o,c]=(0,n.useState)(0),[m,A]=(0,n.useState)(0),d=(0,n.useRef)(!1);(0,n.useEffect)((()=>(d.current=!0,()=>{d.current=!1})),[]);const p=(0,n.useCallback)(((e,t)=>{d.current&&setTimeout((()=>{d.current&&e()}),t)}),[]);return(0,n.useEffect)((()=>{t<M.length?p((()=>{a((e=>e+1))}),125):(c(Date.now()),l(0))}),[t]),(0,n.useEffect)((()=>{if(r<0)return;if(r>=k.length)return A(Date.now()),void p((()=>{a(0),l(-1),i([]),c(0),A(0)}),1e4);const e=k[r],t=Math.max(...e.map((e=>e[1])));e.forEach((e=>{let[t,a]=e;i((e=>[...e,{type:"start",message:t}])),p((()=>{i((e=>[...e,{type:"finish",message:t,time:a}]))}),a)})),p((()=>{l((e=>e+1))}),t+100)}),[r]),(0,n.useEffect)((()=>{e.current&&(e.current.scrollTop=2*e.current.scrollHeight)}),[s,m]),n.createElement("ul",{className:"flex flex-col w-full p-2 m-0 overflow-auto font-mono text-sm text-gray-200 border border-solid rounded-lg bg-slate-900 border-slate-500",style:{height:230},ref:e},n.createElement("li",{className:"list-none"},n.createElement("strong",null,M.slice(0,t))),s.map((e=>n.createElement(Z,(0,B.Z)({key:e.type+e.message},e)))),m>0&&n.createElement(n.Fragment,null,n.createElement("li",{className:"pt-2 list-none"},n.createElement("strong",{className:"text-gray-600"},"Tasks"),":"," ",n.createElement("span",{className:"text-green-500"},s.length/2," completed")),n.createElement("li",{className:"list-none"},n.createElement("strong",{className:"text-gray-600"},n.createElement("span",{className:"invisible"},"T"),"Time"),": ",j(m-o))))}const{version:U}=a(7107);function z(){return n.createElement("div",{className:"bg-gradient-to-b from-slate-900 to-slate-600 star-pattern"},n.createElement("div",{className:"max-w-7xl mx-auto py-10 px-4 pb-6 sm:py-12 sm:px-6 md:py-14 lg:py-16 lg:px-8 xl:py-20 flex flex-col md:flex-row"},n.createElement("div",{className:"text-center md:text-left md:w-6/12"},n.createElement("h1",{className:"text-white flex justify-center md:justify-start items-end gap-2"},n.createElement(w,{height:75}),n.createElement(v,{height:51})),n.createElement("p",{className:"mt-1 mb-0 text-base text-white sm:text-lg sm:max-w-xl sm:mx-auto md:text-xl md:mx-0 md:pr-4"},"A build system and repository management tool for the web ecosystem, written in Rust."),n.createElement("p",{className:"mt-1 text-white opacity-50 text-sm md:text-base md:pr-4"},"Supports JavaScript, TypeScript, Rust, Go, Ruby,"," ",n.createElement(N.Z,{href:"/docs#supported-languages",variant:"muted"},"and more"),"."),n.createElement("div",{className:"mt-3 flex justify-center md:justify-start"},n.createElement("div",null,n.createElement(Q.Z,{href:"/docs/install"},"Get started",n.createElement(s.Z,{icon:l.XEr,className:"ml-1 md:ml-2 inline-block",style:{maxWidth:18}}))),n.createElement("div",{className:"ml-1 sm:ml-2 lg:ml-3"},n.createElement(r.default,{href:"https://www.npmjs.com/package/@moonrepo/cli",className:"w-full flex items-center justify-center px-2 py-1 sm:px-3 sm:py-2 text-base font-bold rounded-md text-white hover:text-white bg-white/5 hover:scale-110 md:text-lg group transition-transform"},n.createElement("span",{className:"opacity-50"},"v"),U)))),n.createElement("div",{className:"mt-4 md:mt-0 md:w-6/12 flex flex-col flex-grow-0"},n.createElement(F,null),n.createElement("div",{className:"mt-2 flex justify-center items-start gap-1"},n.createElement("div",null,n.createElement(o.ZP,{className:"text-white opacity-50",size:"sm"},"Backed by")),n.createElement("div",null,n.createElement(R.Z,{height:22}))))))}var G=a(8199);const H=[{title:"Smart hashing",icon:l.QGx,description:"Collects inputs from multiple sources to ensure builds are deterministic and reproducible."},{title:"Remote caching",icon:l.wEO,description:"Persists builds, hashes, and caches between teammates and CI/CD environments.",status:"new"},{title:"Integrated toolchain",icon:l.AlB,description:"Automatically downloads and installs explicit versions of languages and tools for consistency across the entire workspace or per project."},{title:"Multi-platform",icon:l.Ff$,description:"Runs on common development platforms: Linux, macOS, and Windows."}],C=[{title:"Project graph",icon:l.Bkj,description:"Generates a project graph for dependency and dependent relationships."},{title:"Code generation",icon:l.Krp,description:"Easily scaffold new applications, libraries, tooling, and more!"},{title:"Dependency workspaces",icon:l.JUO,description:"Works alongside package manager workspaces so that projects have distinct dependency trees."},{title:"Ownership metadata",icon:l.iJk,description:"Declare an owner, maintainers, support channels, and more, for LDAP or another integration."}],P=[{title:"Dependency graph",icon:l.Hw7,description:"Generates a dependency graph to increase performance and reduce workloads."},{title:"Action pipeline",icon:l.ar8,description:"Executes actions in parallel and in order using a thread pool and our dependency graph."},{title:"Action distribution",icon:l.fjp,description:"Distributes actions across multiple machines to increase throughput.",status:"coming-soon"},{title:"Incremental builds",icon:l.dzC,description:"With our smart hashing, only rebuild projects that have been touched since the last build."}],T=[{title:"Flakiness detection",icon:l.I85,description:"Reduce flaky builds with automatic retries and passthrough settings.",status:"experimental"},{title:"Webhook events",icon:l.h94,description:"Receive a webhook for every event in the pipeline. Useful for metrics gathering and insights.",status:"experimental"},{title:"Terminal notifications",icon:l.Azy,description:"Receives notifications in your chosen terminal when builds are successful... or are not.",status:"coming-soon"}],D=[{title:"Configuration & convention",icon:l.auv,description:"Use moon the way you want, but with some guard rails."},{title:"Scalability aware",icon:l.o$R,description:"Engineered to scale and grow for codebases of any size."},{title:"Integrated packages",icon:l.m_D,description:n.createElement(n.Fragment,null,"Enhance your pipeline with our"," ",n.createElement(r.default,{href:"https://www.npmjs.com/org/moonrepo"},"@moonrepo")," npm packages."),status:"in-development"},{title:"Process inspection",icon:l.BC0,description:"Inspect and debug failing task processes.",status:"coming-soon"},{title:"Build profiles",icon:l.b2$,description:n.createElement(n.Fragment,null,"Record ",n.createElement(r.default,{href:"/docs/guides/profile"},"CPU and heap profiles")," that can be analyzed in Chrome.")},{title:"Editor extensions",icon:l.E_d,description:n.createElement(n.Fragment,null,"Utilize moon extensions in your favorite editor, like"," ",n.createElement(r.default,{href:"/docs/editors/vscode"},"Visual Studio Code"),".")}];function K(){return n.createElement(G.Z,{title:"moon - A build system and repository management tool for the web ecosystem, written in Rust",description:"Reduces build times and repository maintenance costs through high-quality developer tooling."},n.createElement(z,null),n.createElement("main",null,n.createElement("div",{className:"bg-gradient-to-b from-slate-600 via-purple-600 to-white"},n.createElement(f.Z,{header:"Management",description:"Develop more, manage less",features:H,tier:1}),n.createElement(f.Z,{header:"Organization",description:"Architect a repository to scale",features:C,tier:2,reversed:!0}),n.createElement(f.Z,{header:"Orchestration",description:"Offload heavy tasks",features:P,tier:3}),n.createElement(f.Z,{header:"Notification",description:"Monitor pipeline health",features:T,tier:4,reversed:!0})),n.createElement(m,{header:"And many more features",features:D})))}},9619:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7378),r=a(8944),l=a(1792);const s={failure:"bg-red-100 text-red-900",info:"bg-pink-100 text-pink-900",success:"bg-green-100 text-green-900",warning:"bg-orange-100 text-orange-900"};function i(e){let{className:t,icon:a,text:i,variant:o}=e;return n.createElement("span",{className:(0,r.Z)("inline-flex items-center px-1 py-0.5 rounded text-xs font-bold uppercase",o?s[o]:"bg-gray-100 text-gray-800",t)},a&&n.createElement(l.Z,{icon:a,className:"mr-1"}),i)}},7107:e=>{e.exports=JSON.parse('{"name":"@moonrepo/cli","version":"0.23.4","description":"moon command line and core system.","keywords":["moon","repo","cli","core"],"files":["moon","postinstall.js"],"author":"Miles Johnson","license":"MIT","bin":{"moon":"moon"},"repository":{"type":"git","url":"https://github.com/moonrepo/moon","directory":"packages/cli"},"scripts":{"postinstall":"node ./postinstall.js"},"dependencies":{"detect-libc":"^2.0.1"},"optionalDependencies":{"@moonrepo/core-linux-arm64-gnu":"^0.23.4","@moonrepo/core-linux-arm64-musl":"^0.23.4","@moonrepo/core-linux-x64-gnu":"^0.23.4","@moonrepo/core-linux-x64-musl":"^0.23.4","@moonrepo/core-macos-arm64":"^0.23.4","@moonrepo/core-macos-x64":"^0.23.4","@moonrepo/core-windows-x64-msvc":"^0.23.4"}}')}}]);