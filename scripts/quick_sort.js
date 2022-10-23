
function Quick_Sort(){

    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N logN)";
    document.getElementById("Time_Best").innerText="Ω(N logN)";

    document.getElementById("Space_Worst").innerText="O(logN)";

    c_delay = 0;

    Quick(0, array_size-1);

    enable_buttons();
}

function quick_partition(l, r){

    var i = l + 1;
    var pivot = div_sizes[l];
    div_update(divs[l], div_sizes[l], "yellow");

    for(var j=l+1; j<=r; j++){

        if(div_sizes[j] < pivot){

            div_update(divs[j], div_sizes[j], "yellow");
            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            var temp=div_sizes[i];
            div_sizes[i] = div_sizes[j];
            div_sizes[j] =temp;

            div_update(divs[i], div_sizes[i], "red");
            div_update(divs[j], div_sizes[j], "red");

            div_update(divs[i], div_sizes[i], "blue");
            div_update(divs[j], div_sizes[j], "blue");

            i += 1;
        }
    }

    div_update(divs[l], div_sizes[l], "red");
    div_update(divs[i-1], div_sizes[i-1], "red");

    var temp = div_sizes[l];
    div_sizes[l]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[l], div_sizes[l], "red");
    div_update(divs[i-1], div_sizes[i-1], "red");

    for(var t=l; t<=i; t++){
        div_update(divs[t], div_sizes[t], "green");
    }

    return i-1;
}

function Quick(l, r){
    if(l < r){

        var pivot = quick_partition(l, r);
        Quick(l, pivot-1);
        Quick(pivot+1, r);
    }
}