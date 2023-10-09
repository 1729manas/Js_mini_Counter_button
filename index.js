// we have to make an increment and decrement function
// steps to do that
/*step1. Retrieve the element of the counter using getelementbyid,class, tag anything
step2. In decrement function extract the content from the tag using innerText
step3.convert the extracted content to integer using ParseInt as extracted content is a string
 step4.Increment or decrement the value.
 Step5.and then push the incremented/decremented value in countervalue using innerText*/


const countervalue = document.getElementById('counter'); //Step1 done here.
// Ye function as callback function likhe hai jaise eventlistener me likhata as onclick event pe call hoga ye function
 const decrement=()=>{
    let value = parseInt(countervalue.innerText); // step2 first done extraction using innertext then step3. using ParseInt
    value = value - 1;                        // Step4. is done here.
    countervalue.innerText = value;          // step5.Push the modified counter value


}

const increment=()=>{
    let value = parseInt(countervalue.innerText);
    value = value + 1;
    countervalue.innerText = value;
}

// Insted of writing in callback function pattern we can write it i a normal function pattern
/*function decrement(){
    let value = parseInt(countervalue.innerText);
    value = value - 1;
    countervalue.innerText = value;


}

const increment(){
      let value = parseInt(countervalue.innerText);
    value = value + 1;
    countervalue.innerText = value;
}
*/