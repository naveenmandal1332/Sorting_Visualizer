
function Merge_Sort(){

    document.getElementById("Time_Worst").innerText="O(N logN)";
    document.getElementById("Time_Average").innerText="Θ(N logN)";
    document.getElementById("Time_Best").innerText="Ω(N logN)";

    document.getElementById("Space_Worst").innerText="O(N)";

    c_delay=0;

    merge_partition(0, array_size-1);

    enable_buttons();
}

function merge_partition(l, r){

    if(l < r){
        var mid=Math.floor((l+r)/2);
        div_update(divs[mid], div_sizes[mid], "yellow");

        merge_partition(l, mid);
        merge_partition(mid+1, r);

        merge(l, mid, r);
    }
}

function merge(l, mid, r){
    var p=l, q =mid+1;

    var arr=[], k=0;

    for(var i=l; i<=r; i++){
        if(p>mid){
            arr[k++]=div_sizes[q++];
            div_update(divs[q-1], div_sizes[q-1], "red");
        }
        else if(q>r){
            arr[k++] = div_sizes[p++];
            div_update(divs[p-1], div_sizes[p-1], "red");
        }
        else if(div_sizes[p] < div_sizes[q]){
            arr[k++] = div_sizes[p++];
            div_update(divs[p-1], div_sizes[p-1], "red");
        }
        else{
            arr[k++]=div_sizes[q++];
            div_update(divs[q-1], div_sizes[q-1], "red");
        }
    }

    for(var t=0; t<k; t++){
        div_sizes[l++]=arr[t];
        div_update(divs[l-1], div_sizes[l-1], "green");
    }
}