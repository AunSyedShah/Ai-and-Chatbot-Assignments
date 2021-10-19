function add(m1_value0, m1_value1, m1_value2, m1_value3, m2_value0, m2_value1, m2_value2, m2_value3) {
    console.log(m1_value0 + m2_value0);
    document.getElementById("result_value0").innerHTML = m1_value0 + m2_value0;
    document.getElementById("result_value1").innerHTML = m1_value1 + m2_value1;
    document.getElementById("result_value2").innerHTML = m1_value2 + m2_value2;
    document.getElementById("result_value3").innerHTML = m1_value3 + m2_value3;
}

function getMatrixValues() {
    let m1_value0 = parseInt(document.getElementById("m1_value0").value);
    console(typeof m1_value0);
    let m1_value1 = parseInt(document.getElementById("m1_value1").value);
    let m1_value2 = parseInt(document.getElementById("m1_value2").value);
    let m1_value3 = parseInt(document.getElementById("m1_value3").value);
    let m2_value0 = parseInt(document.getElementById("m2_value0").value);
    let m2_value1 = parseInt(document.getElementById("m2_value1").value);
    let m2_value2 = parseInt(document.getElementById("m2_value2").value);
    let m2_value3 = parseInt(document.getElementById("m2_value3").value);
    add(m1_value0, m1_value1, m1_value2, m1_value3, m2_value0, m2_value1, m2_value2, m2_value3);
}