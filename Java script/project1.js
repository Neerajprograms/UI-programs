const click = document.getElementById('clicks')

console.log(click.textContent)

a = 0;

const type = document.getElementById("numbertexttype")

console.log(type.textContent);

const number = document.getElementById('number')

let c = 0;

console.log(number.textContent)


function incr1()
{
    c ++;
    number.textContent = c;

    a ++

    click.textContent = a;

if ( c % 2 == 0 )
{
    type.textContent = "EVEN";
}

else 
{
    
    type.textContent = "ODD";
}

}
function incr2()
{
    
    c = 2 + c;
    number.textContent = c;
    
    a ++

    click.textContent = a;

if ( c % 2 == 0 )
{
    type.textContent = "EVEN";
}

else 
{
    
    type.textContent = "ODD";
}
}

function incr3()
{
    
    c = 3 + c;
    number.textContent = c;
    
    a ++

    click.textContent = a;

if ( c % 2 == 0 )
{
    type.textContent = "EVEN";
}

else 
{
    
    type.textContent = "ODD";
}
}

function incr4()
{
    
    c = 4 + c;
    number.textContent = c;
    
    a ++

    click.textContent = a;

if ( c % 2 == 0 )
{
    type.textContent = "EVEN";
}

else 
{
    
    type.textContent = "ODD";
}
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

    if ( c % 2 == 0 )
{
    type.textContent = "EVEN";
}

else 
{
    
    type.textContent = "ODD";
}
    
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

    if ( c % 2 == 0 )
{
    type.textContent = "EVEN";
}

else 
{
    
    type.textContent = "ODD";
}
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

    if ( c % 2 == 0 )
{
    type.textContent = "EVEN";
}

else 
{
    
    type.textContent = "ODD";
}
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

    if ( c % 2 == 0 )
{
    type.textContent = "EVEN";
}

else 
{
    
    type.textContent = "ODD";
}
}

function rest()
{
    c = 0;
    number.textContent = c;

    a = 0;    
    click.textContent = a;

    type.textContent = 0;
}






