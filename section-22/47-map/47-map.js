function cleanNames(strings) {
    return strings.map(function(string) { return string.trim(); })
}

console.log(cleanNames(["   timothee", "   darth_hater", "sassyfrassy    ", "  elton john "]));