class StringHelper {
    
    static uppercaseWords(string) {

        return (string + '')
        .replace(/^(.)|\s+(.)/g, function ($1) {
            return $1.toUpperCase()
        })        
    }

    static ucWordsSanitizeRemoverEspacosEmBranco(string) {

        return StringHelper.uppercaseWords(string).normalize('NFD').replace(/[\u0300-\u036f]/g, "").replace(/[^A-Z0-9]/ig, "");
    }
}