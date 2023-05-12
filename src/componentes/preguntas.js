const preguntas = [
  {
    titulo: "¿Qué es lo que te gusta más de tu cumpleaños?",
    opciones: [
      { textoRespuesta: "Que te canten la mañanitas", getTipo: "A", ruta:"https://www.bbmundo.com/wp-content/uploads/2019/02/playlist-las-mananitas-para-la-fiesta-de-cumpleanos-de-tu-hijo.jpg"},
      { textoRespuesta: "La decoración de la fiesta", getTipo: "V", ruta:"https://m.media-amazon.com/images/I/61X1juhZcjL._AC_SX522_.jpg" },
      { textoRespuesta: "Que te den abrazos", getTipo: "K" , ruta:"https://thumbs.dreamstime.com/b/padre-e-hija-con-los-globos-de-la-fiesta-cumplea%C3%B1os-116382529.jpg"},
    ],
  },
  {
    titulo: "¿Qué te gusta más?",
    opciones: [
      { textoRespuesta: "Escuchar cuentos", getTipo: "A", ruta:"https://www.educaciontrespuntocero.com/wp-content/uploads/2022/02/cuentos-para-dormir-978x652.jpg" },
      { textoRespuesta: "Leer cuentos", getTipo: "V", ruta:"https://lamenteesmaravillosa.com/wp-content/uploads/2016/02/Nin%CC%83a-leyendo-cuentos-de-hadas.jpg" },
      { textoRespuesta: "Disfrazarte de los personajes del cuento", getTipo: "K", ruta:"https://img.freepik.com/foto-gratis/nino-jugando-al-superheroe-patio-recreo_53876-46868.jpg" },
    ],
  },
  {
    titulo: "¿Qué te gusta hacer cuando llueve?",
    opciones: [
      { textoRespuesta: "Escuchar la lluvia", getTipo: "A", ruta:"https://media.istockphoto.com/id/1170879651/es/foto/peque%C3%B1a-chica-triste-pensativa-mirando-a-trav%C3%A9s-del-cristal-de-la-ventana-con-un-mont%C3%B3n-de.jpg?b=1&s=170667a&w=0&k=20&c=-htDmOTIXmJgAWuW4Zqn65od9S51Dt6pstrN8UFBLK0=" },
      { textoRespuesta: "Ver la lluvia", getTipo: "V", ruta:"https://media.istockphoto.com/id/1006071456/es/foto/ni%C3%B1o-mirando-por-la-ventana-en-d%C3%ADa-lluvioso.jpg?s=612x612&w=0&k=20&c=WdkaF9aJrYfKc6KP3MlWp5y9wdV9wcx8ijbldHDsuIw=" },
      { textoRespuesta: "Jugar en la lluvia", getTipo: "K", ruta:"https://imagenes.elpais.com/resizer/gbVj64y_JyAQIoNjCj8FmYRytqY=/1960x1103/cloudfront-eu-central-1.images.arcpublishing.com/prisa/WX6WFXO435AQRCL2LNJR2FRMNA.jpg" },
    ],
  },
  {
    titulo: "¿Qué te gusta de tu mascota?",
    opciones: [
      { textoRespuesta: "Escuchar los sonidos que hace", getTipo: "A", ruta:"https://www.losandes.com.ar/resizer/v8uoy5HXiOh69ubEZXCGGyL4VOU=/382x214/smart/cloudfront-us-east-1.images.arcpublishing.com/grupoclarin/RPXZDE32HFAJZEPWG6SFUWEPXU.jpg" },
      { textoRespuesta: "Ver cómo juega", getTipo: "V", ruta:"https://www.revistamoi.com/wp-content/uploads/2016/05/perro-feliz-b.jpg" },
      { textoRespuesta: "Acariciarlo", getTipo: "K" , ruta:"https://static.guiainfantil.com/media/23205/c/12-divertidos-juegos-para-que-ninos-y-perros-estrechen-sus-vinculos-sm.jpg"},
    ],
  },
  {
    titulo: "¿Qué te gusta hacer más?",
    opciones: [
      { textoRespuesta: "Escuchar música", getTipo: "A", ruta:"https://cdn.create.vista.com/api/media/medium/231836796/stock-photo-smiling-child-listening-music-headphones?token=" },
      { textoRespuesta: "Ver la televisión", getTipo: "V", ruta:"https://media.istockphoto.com/id/1225066532/es/foto/vista-trasera-del-ni%C3%B1o-viendo-la-televisi%C3%B3n-en-casa.jpg?s=612x612&w=0&k=20&c=D6P37prcp6cd9ZW3mL5eF4taXdlS4lwEwJgcFQFt4Dk=" },
      { textoRespuesta: "Armar un rompecabezas", getTipo: "K", ruta:"https://www.salonkiddieland.com/wp-content/uploads/2020/06/rompecabezas-nin%CC%83os.jpg" },
    ],
  },
  {
    titulo: "¿Qué te gustaría que te regalen?",
    opciones: [
      { textoRespuesta: "Un instrumento musical", getTipo: "A", ruta:"https://www.semana.com/resizer/ucsruuXHws_80OjZHxvgPMKFcSs=/1280x720/smart/filters:format(jpg):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/semana/BNZ4D7SPLFEITNV4US3O6XVUAA.jpg" },
      { textoRespuesta: "Un cuento", getTipo: "V", ruta:"https://i.ytimg.com/vi/3xGqDcVMveg/maxresdefault.jpg" },
      { textoRespuesta: "Masas moldeables", getTipo: "K", ruta:"https://cdn.shopify.com/s/files/1/0611/2401/8326/products/jirafa_0a32fc6a-7026-4018-808e-e4c85258e7c1.png?v=1670287507" },
    ],
  },
  {
    titulo: "¿Qué te gusta hacer en la escuela?",
    opciones: [
      { textoRespuesta: "Cantar", getTipo: "A" , ruta:"https://media.istockphoto.com/id/923360540/es/foto/ni%C3%B1a-cantando-con-un-micr%C3%B3fono.jpg?s=170667a&w=0&k=20&c=fDI4NNIFAyhn9lfQPjxKcT7pK4onCQFMK3vmTdZqsfw="},
      { textoRespuesta: "Dibujar", getTipo: "V", ruta:"https://us.123rf.com/450wm/tashka2000/tashka20001104/tashka2000110400127/9434434-el-ni%C3%B1o-acostado-en-el-piso-dibuja-y-pinta-su-imagen-favorita.jpg" },
      { textoRespuesta: "Jugar en el patio", getTipo: "K", ruta:"https://img.freepik.com/foto-gratis/ninos-jugando-al-futbol-afuera_23-2148210529.jpg" },
    ],
  },
  {
    titulo: "¿Qué haces cuando te enojas?",
    opciones: [
      { textoRespuesta: "Me pongo a Gritar", getTipo: "A" , ruta:"https://eresmama.com/wp-content/uploads/2021/08/nino-grito-enojo-768x512.jpg"},
      { textoRespuesta: "Caras y gestos", getTipo: "V", ruta:"https://enfamilia.aeped.es/sites/enfamilia.aeped.es/files/styles/4col/public/images/articulos/comportamiento_nino_pequeno.shutterstock_398844676.jpg?itok=D61Gohj5" },
      { textoRespuesta: "Tirarte al piso", getTipo: "K", ruta:"https://eresmama.com/wp-content/uploads/2020/03/nina-enfadad-tumbada-suelo.jpg" },
    ],
  },
  {
    titulo: "¿Cuándo vas al campo que te gusta más?",
    opciones: [
      { textoRespuesta: "Escuchar a los pajaros", getTipo: "A" , ruta:"https://www.lavanguardia.com/files/article_gallery_microformat/uploads/2021/01/20/6008023649439.jpeg"},
      { textoRespuesta: "Ver el paisaje", getTipo: "V", ruta:"https://st4.depositphotos.com/1718692/20592/i/600/depositphotos_205927112-stock-photo-woodlot-on-a-grassy-hillside.jpg" },
      { textoRespuesta: "Escalar un árbol", getTipo: "K", ruta:"https://media.istockphoto.com/id/695670552/es/foto/ni%C3%B1os-suben-muy-alto-%C3%A1rbol-en-sprintime.jpg?s=170667a&w=0&k=20&c=wMt3rxK1IBuQiRd5Jd_vSwIHxlxGFJeBFJ7_C3r8LKU=" },
    ],
  },
  {
    titulo: "¿A qué lugar te gustaria ir?",
    opciones: [
      { textoRespuesta: "A un concierto de musica", getTipo: "A" , ruta:"https://www.ifc.org/wps/wcm/connect/d45d96de-54e1-4449-bed8-f0796e60f97f/Mexican-band-Zo%C3%A9.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE-d45d96de-54e1-4449-bed8-f0796e60f97f-o533MgL"},
      { textoRespuesta: "Al cine", getTipo: "V", ruta:"https://ekosnegocios.com/image/posts/January2022/fHEdhPpm0LXWXPSEVJib.jpg" },
      { textoRespuesta: "A un parque acuático", getTipo: "K", ruta:"https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/3e/58/d3/listo-para-un-chapuzon.jpg?w=1200&h=-1&s=1" },
    ],
  },
  {
    titulo: "¿Qué te gusta hacer con tu familia?",
    opciones: [
      { textoRespuesta: "Contarse historias, cuentos y chistes", getTipo: "A", ruta:"https://www.cafe-mx.com/blog/app/assets/media/2020/05/Comer-en-familia.jpg" },
      { textoRespuesta: "Ver una pelicula", getTipo: "V", ruta:"https://kaikucaffelatte.com/blog/wp-content/uploads/2018/12/mejores-peliculas-navidenas.jpg" },
      { textoRespuesta: "Darse abrazos", getTipo: "K", ruta:"https://cdn.create.vista.com/api/media/medium/163629112/stock-photo-family-hugging-each-other?token=" },
    ],
  },
  {
    titulo: "¿Qué preferirias ser?",
    opciones: [
      { textoRespuesta: "Un Músico", getTipo: "A", ruta:"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jose-gonzalez-cantante-concierto-madrid-1561703645.jpg?crop=0.893xw:1.00xh;0.0545xw,0&resize=640:*" },
      { textoRespuesta: "Un pintor", getTipo: "V", ruta:"https://mymodernmet.com/wp/wp-content/uploads/2018/05/painting-ideas-2-1.jpg" },
      { textoRespuesta: "Un doctor", getTipo: "K" , ruta:"https://cdn.euroinnova.edu.es/img/subidasEditor/doctor-5871743_640-1610073541.webp"},
    ],
  },


];

export default preguntas;
