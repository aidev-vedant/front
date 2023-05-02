
<?php  
    if(isset($_POST['submit']))  
    {  
        $number1 = $_POST['number1'];  
        $number2 = $_POST['number2'];  
        $sum =  $number1 + $number2;     
echo "The Answer is:".$sum;
}  
?>  
</body>  
</html>  