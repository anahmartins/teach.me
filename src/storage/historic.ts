export function getHistoric(): { id: string; value: string }[]{ // Exporta a função getHistoric. A função retorna um array de strings.
    const historic = localStorage.getItem('historics') // Busca o item 'historics' no localStorage e armazena na constante 'historic'.
    if (historic) { // Verifica se 'historics' existe no localStorage.
        return JSON.parse(historic).map((item: string, index: number) => ({
            id: `${index}-${item}`, // Cria uma chave única usando o índice e o valor
            value: item,
        }))// Se existir, converte a string JSON em um array de strings e retorna.
    };
    return []; // Se não existir, retorna um array vazio.
}

export function setHistoric(item: string) { // Exporta a função setHistoric que aceita um item do tipo string.
    const historic = localStorage.getItem('historics') // Busca o item 'historics' do localStorage.
    if (historic) { // Se 'historics' existir no localStorage:
        const parse = JSON.parse(historic) // Converte a string JSON em objeto JavaScript.
        localStorage.setItem('historics', JSON.stringify([...parse, item])) // Adiciona o novo item ao array existente e armazena como string JSON no localStorage.
        return // Sai da função.
    }
    localStorage.setItem('historics', JSON.stringify([item])) // Se 'historics' não existir, cria um novo array com o item e armazena como string JSON no localStorage.
}