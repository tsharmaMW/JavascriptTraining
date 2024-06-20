var MathModule = (function (){
    function Add(x, y){
        return x + y;
    }

    function Substract(x,y){
        return x-y;
    }

    function Product(x,y){
        return x*y;
    }

    return {
        Add: Add,
        Product: Product,
    };
})();