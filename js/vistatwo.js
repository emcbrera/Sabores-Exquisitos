const data =[
    {
        nombre: "Dulce amanecer",//1
        precio: "$120.000",
        seccion: "Cumpleaños",
        categoria: "Golden",
        genero: "Mujer" ,
        contenido: "Omelette, milo caliente, chocolatina M&M, porción de torta, yougurt alpina", 
        elemento: "Tarjeta personalizada",
        envio: "35% Descuento",
        size: "20 cm x 40 cm",
        personalizado: "No",
        img: " ",
        
    },
    {
        nombre: "Detalle con amor",//2
        precio: "$178.000",
        seccion: "Cumpleaños",
        categoria: "Premium",
        genero: "Mujer" ,
        contenido: "Waffles con arequipe o nutella y frutos rojos, jugo de naranja, milo, cupcake, tarjeta perzonalizada", 
        elemento: "Peluche",
        envio: "Gratis",
        size: " 30 cm x 60cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Regala felicidad",//3
        precio: "$70,000",
        seccion: "Cumpleaños",
        categoria: "Platinum",
        genero: "Mujer" ,
        contenido: "Sandwich jamón y queso doble con lechuga, jugo de naranja, papas Pringles, ramo de flores y brownie", 
        elemento: "No contiene",
        envio: "15% Descuento",
        size: "20 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Un buen día para sonreír", //4
        precio: "$80,000",
        seccion: "Cumpleaños",
        categoria: "Platinum",
        genero: "Hombre" ,
        contenido: "Sandwich especial, jugo de naranja, chocolates ferrero rocher X3, envase de vidrio relleno con frutos secos", 
        elemento: "No contiene",
        envio: "15% Dto",
        size: "20 cm x 40cm ",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Regala una sonrisa",//5
        precio: "$175,000",
        seccion: "Cumpleaños",
        categoria: "Premium",
        genero: "Hombre" ,
        contenido: "Sándwich de pollo, ensalada de frutas, jugo de naranja, postre o Huevos rancheros, globos metalizados, tarjeta personalizada", 
        elemento: "Camisa",
        envio: "Gratis",
        size: "25 cm x 60cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Especialmente para ti",//6
        precio: "$110,000",
        seccion: "Cumpleaños",
        categoria: "Golden",
        genero: "Hombre" ,
        contenido: "Sandwich de jamón y queso tipo cubano, ensalada de frutas con coco, maní y queso, Jugo de Mango, (Café, milo o chocolate) ", 
        elemento: "Tarjeta personalizada para la ocasión",
        envio: "35% Descuento",
        size: "30 cm x 60cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Un día especial",//7
        precio: "$130,000",
        seccion: "Cumpleaños",
        categoria: "Premium",
        genero: "Niña" ,
        contenido: "Sándwich de pollo, milo, torta de 250 gr, bon your, alpinitos, envase de gomitas trululu, compotas", 
        elemento: "Tarjeta personalizada y peluche",
        envio: "35% Descuento",
        siza: "30 cm x 70cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Cultiva emociones",//8
        precio: "$75,000",
        seccion: "Cumpleaños",
        categoria: "Golden",
        genero: "Niña" ,
        contenido: "Flauta de pollo, ensalada de frutas, jugo de naranja, milo", 
        elemento: "Trajeta personalizada",
        envio: "35% Descuento",
        size: "20 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Dulce despertar",//9
        precio: "$95,000",
        seccion: "Cumpleaños",
        categoria: "Golden",
        genero: "Niño" ,
        contenido: "Sándwich jamón y doble queso, milo, torta, bon your, papas margarita, gomas grissly, compotas", 
        elemento: "Tarjeta personalizada",
        envio: "35% Descuento",
        size: "30 cm x 70cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Inicia un buen día",//10
        precio: "$130,000",
        seccion: "Cumpleaños",
        categoria: "Premium",
        genero: "Niño" ,
        contenido: "Sándwich de pollo, jugo de naranja, yogurt, fruta que desee, paquete de masmelos, paquete de oreo", 
        elemento: "Peluche",
        envio: "Gratis",
        size: "30 cm x 70cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Despierta con amor",//11
        precio: "$80.000",
        seccion: "Dia de la madre",
        categoria: "Platinum",
        genero: "Mujer" ,
        contenido: "Jugo de naranja o mandarina, waffles con nutella y fresa, mix de frutas", 
        elemento: "No contiene",
        envio: "15% Descuento",
        size: "25 cm x 35cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Amor para mamá",//12
        precio: "$167.000",
        seccion: "Dia de la madre",
        categoria: "Premium",
        genero: "Mujer" ,
        contenido: "Yogurt, manzana, pudin, chocolates, cereal, jugo, fruto, cupcakes, vino gato negro, café late juan Valdez", 
        elemento: "Ramo de rosas y un girasol",
        envio: "Gratis",
        size: "25 cm x 35cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Feliz día mamá",//13
        precio: "$125.000",
        seccion: "Dia de la madre",
        categoria: "Golden",
        genero: "Mujer" ,
        contenido: "Mix de frutas, mani, parfait (yogurt griego, granola y fruta), tostadas con tomate, jamón serrano y queso parmesano, waffles con nutella y fresa", 
        elemento: "Tarjeta personalizada",
        envio: "35% Descuento",
        size: "35 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Una sonrisa para mamá",//14
        precio: "$170.000",
        seccion: "Dia de la madre",
        categoria: "Premium",
        genero: "Mujer" ,
        contenido: "Omellet de jamon, queso y maicitos dulces, café con leche, jugo de naranja, fruta picada, postre alpinette, Galletas tosh, sobre de maní", 
        elemento: "Rosas y peluche",
        envio: "Gratis",
        size: "35cm x 40cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Lindo despertar",//15
        precio: "$140.000",
        seccion: "Dia de la madre",
        categoria: "Golden",
        genero: "Mujer" ,
        contenido: "Jugo hatsú, milo, yogurt alpina, manzana, cubanito jamón y queso, barquillos rolls, masmelos en envase de vidrio", 
        elemento: "Tarjeta personalizada",
        envio: "35% Descuento",
        size: "35 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Linda Sorpresa",//16
        precio: "$75.000",
        seccion: "Dia de la madre",
        categoria: "Golden",
        genero: "Mujer" ,
        contenido: "Café, avena, uvas, sándwich, chocolatina, hersheys, salchichas enlatadas, zucaritas, maní, 2 panes de queso", 
        elemento: "Tarjeta personalizada",
        envio: "30% Descuento",
        size: "35 cm x 40cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Buen amanecer",//17
        precio: "$90.000",
        seccion: "Dia de la madre",
        categoria: "Platinum",
        genero: "Mujer" ,
        contenido: "Sandwich de pan baguette, jamón, queso, lechuga, tomate, cebolla, jugo de naranja, café con leche, chocolates, bon yurt, manzana verde, cupcakes", 
        elemento: "No contiene",
        envio: "15% Descuento",
        size: "30 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Feliz Mañana",//18
        precio: "$125.000",
        seccion: "Dia de la madre",
        categoria: "Golden",
        genero: "Mujer" ,
        contenido: "Bebida de elección milo, trío de fruta, postre, parfait, botellita de granola, sándwich gourmet", 
        elemento: "Tarjeta personalizada",
        envio: "35% Descuento",
        size: "45 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Regala sonrisas",//19
        precio: "$175.000",
        seccion: "Dia de la madre",
        categoria: "Premium",
        genero: "Mujer" ,
        contenido: "(3) arepas de semillas, lentejas y garbanzo con adicional de humus para untar", 
        elemento: "Tarjeta personalizada y blusa",
        envio: "Gratis",
        size: "35 cm x 40cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Feliz Mañana para mamá",//20
        precio: "$190.000",
        seccion: "Dia de la madre",
        categoria: "Premium",
        genero: "Mujer" ,
        contenido: "Waffles, sándwich de jamón, queso y huevo con verduras, jugo de naranja 100%, arreglo floral con orquídea", 
        elemento: "Tarjeta personalizada y peluche",
        envio: "Gratis",
        size: "45 cm x 50cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Sonrisas para papá",//21
        precio: "$60.000",
        seccion: "Dia del padre",
        categoria: "Platinum",
        genero: "Hombre" ,
        contenido: "Sandwich de pan baguette, jamón, queso, lechuga, tomate, cebolla, jugo de naranja, papitas pringles, galletas Tosh", 
        elemento: "No contiene",
        envio: "Envío: 15% Descuento",
        size: "Tamaño: 30 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Feliz Mañana papá",//22
        precio: "$120.000",
        seccion: "Dia del padre",
        categoria: "Golden",
        genero: "Hombre" ,
        contenido: "Jugo de naranja, 2 empanadas horneadas de pollo, manzana, queso pera, cerveza corona, papas pringles", 
        elemento: "Tarjeta personalizada",
        envio: "Envío: 35% Descuento",
        size: "Tamaño: 30 cm x 20cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Feliz día padre", //23
        precio: "$195.000",
        seccion: "Dia del padre",
        categoria: "Premium",
        genero: "Hombre" ,
        contenido: "Sandwich jamón y queso, jugo, frasco de frutos secos chocolatina premium, papas pringles", 
        elemento: "Tarjeta personalizada y camisa",
        envio: "Gratis",
        size: "50 cm x 50cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Con amor para papá",//24
        precio: "$170.000",
        seccion: "Dia del padre",
        categoria: "Premium",
        genero: "Hombre" ,
        contenido: "Omelette de jamón, queso y maíz, wraps hawaiano, waffles hawaiano, huevos rancheros", 
        elemento: "Tarjeta personalizada y corbata",
        envio: "Gratis",
        size: "45 cm x 50cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Un detalle para papá",//25
        precio: "$130.000",
        seccion: "Dia del padre",
        categoria: "Golden",
        genero: "Hombre" ,
        contenido: "Cerveza peroni, mix de marañon, pistachos, mani, 2 ferreros rocher", 
        elemento: "Tarjeta personalizada",
        envio: "35% Descuento",
        size: "35 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Regalo para nuestro héroe",//26
        precio: "$135.000",
        seccion: "Dia del padre",
        categoria: "Golden",
        genero: "Hombre" ,
        contenido: "Sandwich jamón y queso, bonyurt, papas prigles pequeñas, jugo, porción de torta", 
        elemento: "Vaso personalizado",
        envio: "30% Descuento",
        size: "35 cm x 40cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Despierta con amor papá",//27
        precio: "$50.000",
        seccion: "Dia del padre",
        categoria: "Platinum",
        genero: "Hombre" ,
        contenido: "Taza de desayuno de ceramica, sujeto a stock, jugo de frutas, infusiones varias", 
        elemento: "No contiene",
        envio: "15% Descuento",
        size: "25 cm x 35cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Amor para papá",//28
        precio: "$177.000",
        seccion: "Dia del padre",
        categoria: "Premium",
        genero: "Hombre" ,
        contenido: "Jugo de naranja, sándwich de Jamón de cordero, café Juan Valdez, frutas", 
        elemento: "Camisa",
        envio: "Gratis",
        tamaño: "",
        personalizado: "25 cm x 35cm",
        img: "Si",
    },

    {
        nombre: "Feliz día papá",//29
        precio: "$125.000",
        seccion: "Dia del padre",
        categoria: "Golden",
        genero: "Hombre" ,
        contenido: "Cervezas coronitas, jugo natural, empanadas", 
        elemento: "Tarjeta con mensaje personalizado",
        envio: "35% Descuento",
        size: "45 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Una sonrisa para papá",//30
        precio: "$160.000",
        seccion: "Día del padre",
        categoria: "Premium",
        genero: "Hombre" ,
        contenido: "Sixpack de coronitas, torta mini de piña, paquete de papas, omelette de jamón y queso", 
        elemento: "Tarjeta personalizada y corbata",
        envio: "Gratis",
        tamaño: "35cm x 40cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Sabores de Amistad",//31
        precio: "$125.000",
        seccion: "Amor y amistad",
        categoria: "Golden",
        genero: "Unisex" ,
        contenido: "Sandwich de jamón, queso y tocineta, jugo, paquete oreo, cupcake", 
        elemento: "Tarjeta con mensaje personalizado",
        envio: "35% Descuento",
        size: "45 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Dulce Encuentro",//32
        precio: "$205.000",
        seccion: "Amor y amistad",
        categoria: "Premium",
        genero: "Unisex" ,
        contenido: "jugo de naranja y milo, mini torta, dos fresas cubiertas de chocolate, waffles con fruta", 
        elemento: "Tarjeta personalizada y rosa",
        envio: "Gratis",
        size: "35cm x 40cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Desayuno de Amor en Cama",//33
        precio: "$125.000",
        seccion: "Amor y amistad",
        categoria: "Platinum",
        genero: "Unisex" ,
        contenido: "Porciones de fruta, yogurt, barra de cereal o porción de torta", 
        elemento: "No contiene",
        envio: "15% Descuento",
        size: "45 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Amanecer de Amistad",//34
        precio: "$180.000",
        seccion: "Amor y amistad",
        categoria: "Premium",
        genero: "Unisex" ,
        contenido: "Sandwich, jugo mambe, yogurt, muffin, frasco de gomas o masmelos", 
        elemento: "Peluche",
        envio: "Gratis",
        size: "45cm x 45cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Delicias Matutinas de Amor",//35
        precio: "$ 175.000",
        seccion: "Amor y amistad",
        categoria: "Premium",
        genero: "Unisex" ,
        contenido: "waffles con nutella, fresa y arandanos, sándwich, brownie, jugo de naranja", 
        elemento: "Peluche",
        envio: "Gratis",
        size: "55cm x 60cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Desayuno con Amor y Sonrisa",//36
        precio: "$190.000",
        seccion: "Amor y amistad",
        categoria: "Premium",
        genero: "Unisex" ,
        contenido: "Sándwich de jamón y queso, jugo, fruta, yogur griego, brownie, queso pera", 
        elemento: "Peluche",
        envio: "Gratis",
        size: "50cm x 55cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Sorpresa de Dulce Amistad",//37
        precio: "$65.000",
        seccion: "Amor y amistad",
        categoria: "Platinum",
        genero: "Unisex" ,
        contenido: "Sandwich de jamón, queso y tocineta, jugo, fruta", 
        elemento: "No contiene",
        envio: "15% Descuento",
        size: "35 cm x 40cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Brunch de Amor",//38
        precio: "$100.000",
        seccion: "Amor y amistad",
        categoria: "Golden",
        genero: "Unisex",
        contenido: "Yogur griego con cereal y fruta, wrap de jamón y queso, ponquecito sin azúcar", 
        elemento: "Tarjeta personalizada y una rosa",
        envio: "Gratis",
        size: "40cm x 40cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Amanecer de Risas y Ternura",//39
        precio: "$75.000",
        seccion: "Amor y amistad",
        categoria: "Platinum",
        genero: "Unisex" ,
        contenido: "Sandwich de jamón, queso y tocineta, jugo,, cupcake, manzana", 
        elemento: "No tiene",
        envio: "15% Descuento",
        size: "45 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Brindis Matutino de Amor",//40
        precio: "$250.000",
        seccion: "Amor y amistad",
        categoria: "Premium",
        genero: "Unisex" ,
        contenido: "Sándwich de jamón de pollo, champan, pizza asturias, arroz con leche", 
        elemento: "Ramo de flores",
        envio: "Gratis",
        size: "Tamaño: 35cm x 40cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Amanecer de Amor Eterno",//41
        precio: "$145.000",
        seccion: "Aniversario",
        categoria: "Premium",
        genero: "Unisex" ,
        contenido: "Sandwich de jamón, queso y tocineta, jugo,, cupcake, fruta, chocolates", 
        elemento: "Tarjeta personalizada y dos rosas",
        envio: "Gratis",
        size: "45 cm x 50cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Desayuno de Aniversario Feliz",//42
        precio: "$150.000",
        seccion: "Aniversario",
        categoria: "Premium",
        genero: "Unisex" ,
        contenido: "Sándwich de Jamón de pollo, jugo, chocolates, papas y frutas", 
        elemento: "Ramo de flores",
        envio: "Gratis",
        size: "40cm x 50cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Dulces Momentos de Aniversario",//43
        precio: "$120.000",
        seccion: "Aniversario",
        categoria: "Golden",
        genero: "Unisex" ,
        contenido: "Cerveza, chocolates, papas pringles, snack de jamón, galletas ducales", 
        elemento: "Tarjeta personalizada",
        envio: "35% Descuento",
        size: "45 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Desayuno de Amor Duradero",//44
        precio: "$125.000",
        seccion: "Aniversario",
        categoria: "Golden",
        genero: "Unisex" ,
        contenido: "Jugo, sandwich, ponqué artesanal, galletas waffer, postre", 
        elemento: "Tarjeta Personalizada",
        envio: "35% Descuento",
        size: "40cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Desayuno con Besos y Aniversarios",//45
        precio: "$65.000",
        seccion: "Aniversario",
        categoria: "Platinum",
        genero: "Unisex" ,
        contenido: "2 wafles, huevos revueltos, porción de queso, fresas con miel, milo", 
        elemento: "No contiene",
        envio: "15% Descuento",
        size: "45 cm x 50cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Especial Matutino de Aniversario",//46
        precio: "$85.000",
        seccion: "Aniversario",
        categoria: "Platinum",
        genero: "Unisex" ,
        contenido: "Fruta, jugo, galleta con chocolate, sandwich ", 
        elemento: "No contiene",
        envio: "15% Descuento",
        size: "45cm x 40cm",
        personalizado: "No",
        img: "",
    },

    {
        nombre: "Brunch de Amor Inquebrantable",//47
        precio: "$115.000",
        seccion: "Aniversario",
        categoria: "Golden",
        genero: "Unisex" ,
        contenido: "Fruta, jugo, milo, ponqué de chocolate, Sandwich", 
        elemento: "Tarjeta personalizada",
        envio: "35% Descuento",
        size: "45 cm x 50cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Desayuno con Besos y Recuerdos",//48
        precio: "$190.000",
        seccion: "Aniversario",
        categoria: "Premium",
        genero: "Unisex" ,
        contenido: "(2)Sándwich de jamón y queso, (2) bebida caliente, (2) bebida fría, 2) ensalada de frutas. 2) torta Personal", 
        elemento: "Peluches de pareja",
        envio: "Gratis",
        size: "45cm x 60cm",
        personalizado:"No",
        img: "",
    },

    {
        nombre: "Amanecer de Amor que Perdura",//49
        precio: "$210.000",
        seccion: "Aniversario",
        categoria: "Premium",
        genero: "Unisex" ,
        contenido: "Omelette de jamón y queso, almojábana, sándwich de pollo, ensalada de frutas, torta personal, bebida caliente", 
        elemento: "Tarjeta personalizada y ramo de rosas",
        envio: "Gratis",
        size: "45 cm x 50cm",
        personalizado: "Si",
        img: "",
    },

    {
        nombre: "Momentos Mágicos de Aniversario",//50
        precio: "$130.000",
        seccion: "Aniversario",
        categoria: "Golden",
        genero: "Unisex" ,
        contenido: "Omelette especial, jugo, porción de frutas, galletas tosh, milo en caja, chocolatinas", 
        elemento: "Ramo de flores",
        envio: "35% Descuento",
        tamaño: "40cm x 50cm",
        personalizado: "No",
        img: "",
    },


];


function anterior(){

}

function siguiente(){
    
}