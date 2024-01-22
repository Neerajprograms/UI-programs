const click = document.getElementById('clicks')

console.log(click.textContent)

a = 0;

const number = document.getElementById('number')

let c = 0;

console.log(number.textContent)


function incr1()
{
    c++;
    number.textContent = c;

    a ++

    click.textContent = a;
}
function incr2()
{
    c = c + 2;
    number.textContent = c;
    a ++

    click.textContent = a;
}

function incr3()
{
    c = c + 3;
    number.textContent = c;
    a ++

    click.textContent = a;
}

function incr4()
{
    c = c + 4;
    number.textContent = c;
    a ++

    click.textContent = a;
}

function dicr1()
{
    if (c <= 0)
    {
        alert("Count decrease value below 0")
    }
    else
    {
        c = --c;
        number.textContent = c;
    }
    a ++

    click.textContent = a;
    
}
function dicr2()
{
    if (c <= 0)
    {
        alert("Count decrease value below 0")
    }
    else
    {
        c = c-2;
        number.textContent = c;
    }
    a ++

    click.textContent = a;
}

function dicr3()
{
    if (c <= 0)
    {
        alert("Count decrease value below 0")
    }
    else
    {
        c = c-3;
        number.textContent = c;
    }
    a ++

    click.textContent = a;
}

function dicr4()
{
    if (c <= 0)
    {
        alert("Count decrease value below 0")
    }
    else
    {
        c = c-4;
        number.textContent = c;
    }
    a ++

    click.textContent = a;
}

function rest()
{
    c = 0;
    number.textContent = c;

    a = 0;    
    click.textContent = a;

}


const type = document.getElementById("numbertexttype")

console.log(type.textContent);


if ( c % 2 == 0 )
{
    type.textContent = "EVEN";
}
else 
{
    
    type.textContent = "ODD";
}



