function tresNumeros (x,y,z)
{
    if(x > y && x > z)
    {
    console.log(x);
    } 
        else if (x < y && y > z)
        {
            console.log(y);
        } 
            else if (z > x && z > y)
            {
            console.log(z);
            } 
                else 
                {
                console.log (x);
                }

}
    

tresNumeros (1,2,3);

tresNumeros (3,2,1);

tresNumeros (2,3,1);

tresNumeros (3,3,3);