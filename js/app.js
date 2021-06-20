let sub1_inputs = document.querySelectorAll("#sub1 input");
let sub2_inputs = document.querySelectorAll("#sub2 input");
let sub3_inputs = document.querySelectorAll("#sub3 input");
let sub4_inputs = document.querySelectorAll("#sub4 input");
let sub5_inputs = document.querySelectorAll("#sub5 input");
let calc_btn = document.querySelector(".calc-btn");

calc_btn.addEventListener("click", () => {

    for(let i = 0; i < sub1_inputs.length; i++){
        if (sub1_inputs[i].value != "") {
            total_calc("sub1");
        }
        else{
            document.querySelector("#sub1").lastElementChild.innerHTML = "";
            break;
        }
    }

    for(let i = 0; i < sub2_inputs.length; i++){
        if (sub2_inputs[i].value != "") {
            total_calc("sub2");
        }
        else{
            document.querySelector("#sub2").lastElementChild.innerHTML = "";
            break;
        }
    }

    for(let i = 0; i < sub3_inputs.length; i++){
        if (sub3_inputs[i].value != "") {
            total_calc("sub3");
        }
        else{
            document.querySelector("#sub3").lastElementChild.innerHTML = "";
            break;
        }
    }

    for(let i = 0; i < sub4_inputs.length; i++){
        if (sub4_inputs[i].value != "") {
            total_calc("sub4");
        }
        else{
            document.querySelector("#sub4").lastElementChild.innerHTML = "";
            break;
        }
    }

    for(let i = 0; i < sub5_inputs.length; i++){
        if (sub5_inputs[i].value != "") {
            total_calc("sub5");
        }
        else{
            document.querySelector("#sub5").lastElementChild.innerHTML = "";
            break;
        }
    }

    // sub2_inputs.forEach((input) => {
    //     if (input.value != "") {
    //         total_calc("sub2");
    //     }
    //     else{
    //         document.querySelector("#sub2").lastElementChild.innerHTML = "";
    //     }
    // })
})

function total_calc(sub){
    let sub_inputs = document.querySelectorAll(`#${sub} input`);
    let marks_array = [];
    sub_inputs.forEach((input) => {
        marks_array.push(input.value);
    })
    let std10_marks = Math.round((Number(marks_array[0])*71.43)/100);
    let std11_marks = Math.round((Number(marks_array[1])+Number(marks_array[2]))/4);
    let std12_marks = Math.round(((Number(marks_array[3])+Number(marks_array[4]))*20)/100);

    let total = Number(std10_marks+std11_marks+std12_marks);

    document.querySelector(`#${sub}`).lastElementChild.innerHTML = total;
}