let canvas = document.querySelector('#canvas');
let ctx = canvas.getContext('2d');
let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

let figuras = [];

const CANT_FIG = 30;

function main()
{
    debugger;
    crearFiguras();
    dibujar();
    figuras[5].selected(true);
    figuras[15].selected(true);
    figuras[20].selected(true);
    dibujar();
}

function crearFiguras()
{
    for (i = 0; i < CANT_FIG; i++)
    {
        addFigura(i < (CANT_FIG / 2));
    }
}

function dibujar()
{
    pintarCanvas();
    for (i = 0; i < CANT_FIG; i++)
    {
        figuras[i].draw();
    }
}

function pintarCanvas()
{
    let unColor = 'rgba(245, 245, 245, 255)';
    let rect = new Rect(0, 0, canvasWidth-1, canvasHeight-1, unColor , ctx, true);
    rect.draw();
}

function addFigura(estilo)
{
    let posX = Math.round(Math.random() * canvasWidth);
    let posY = Math.round(Math.random() * canvasHeight);
    let color = randomRGBA();

    if (estilo == true) {
        let rect = new Rect(posX, posY, Math.round(Math.random() * 50), Math.round(Math.random() * 50), color, ctx, false);
        figuras.push(rect);
    }
    else
    {
        let ellipse = new Ellipse(posX, posY, Math.round(Math.random() * 50), Math.round(Math.random() * 50), color, ctx, false);
        figuras.push(ellipse);

    }
    
    //rect.draw();

}

function randomRGBA() {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let a = 255;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
}

