function cambiomoneda(euros, moneda) {
    let euroyenes = (129.852 * euros);
    let eurodolar = (1.28611 * euros);
    let eurolibra = (0.86 * euros);

    if (moneda == "yenes") {
        return alert(euroyenes + " yenes son " + euros+"€");
    }
    else if (moneda == "libras") {
        return alert(eurolibra + " libras son " + euros+"€");
    }
    else if (moneda == "dolares") {
        return alert(eurodolar + " dolares son " + euros+"€");
    }
    else {
        return alert("Divisa incorrecta");
    }
}

cambiomoneda(parseInt(prompt("Euros")), (prompt("Divisa")));