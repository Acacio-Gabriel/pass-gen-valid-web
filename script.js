//Conjunto de caracteres para geração de senhas
const UPPERCASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWERCASE = 'abcdefghijklmnopqrstuvwxyz';
const DIGITS = '0123456789';
const SYMBOLS = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

//Gerador de Senhas
function senha_gerada() {
    const length = parseInt(document.getElementById('length').value);
    const useUpper = document.getElementById('uppercase').checked;
    const useLower = document.getElementById('lowercase').checked;
    const useDigits = document.getElementById('digits').checked;
    const useSymbols = document.getElementById('symbols').checked;


//Pelo menos um conjunto selecionado
    if (!useUpper && !useLower && !useDigits && !useSymbols) {
        alert('Selecione pelo menos um tipo de caractere!');
        return;
    }

    let char = '';
    if (useUpper) char += UPPERCASE;
    if (useLower) char += LOWERCASE;
    if (useDigits) char += DIGITS;
    if (useSymbols) char += SYMBOLS;

    let senha = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * char.length);
        senha += char[randomIndex];
    }
    document.getElementById('senha-gerada').textContent = senha;
    //Preencher automaticamente o campo de hash com a senha gerada
    document.getElementById('senha_hash').value = senha;
}

//Validador de Senha forte
function validar_senha(senha) {
    const minLength = 8;
    const hasUpper = /[A-Z]/.test(senha);
    const hasLower = /[a-z]/.test(senha);
    const hasDigit = /\d/.test(senha);
    const hasSymbol = /[!@#$%^&*()_+~`|}{[\]:;?><,./-=]/.test(senha);

    const errors = [];
    if (senha.length < minLength) errors.push(`A senha deve ter pelo menos ${minLength} caracteres.`);
    if (!hasUpper) errors.push('A senha deve conter pelo menos uma letra maiúscula.');
    if (!hasLower) errors.push('A senha deve conter pelo menos uma letra minúscula.');
    if (!hasDigit) errors.push('A senha deve conter pelo menos um número.');
    if (!hasSymbol) errors.push('A senha deve conter pelo menos um símbolo.');

    return{
        isValid: errors.length === 0,
        errors: errors
    }
}

//Função que chama o validador e exibe os resultados
function chamar_validador() {
    const senha = document.getElementById('senha_validar').value;
    const resultado = validar_senha(senha);
    const resultadoDiv = document.getElementById('resultado_validacao');
    if (resultado.isValid) {
        resultadoDiv.innerHTML = '<span style="color: green;">Senha Forte!</span>';
    } else {
        resultadoDiv.innerHTML = '<span style="color: red;">Senha Fraca:</span><ul>' + resultado.errors.join(', ') + '<span>';
    }
}

//Hash SHA-256 com Web Crypto API
async function calcular_hash(text) {
    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

//Uso evento no clique
document.getElementById('btnHash').addEventListener('click', async () => {
    const senha = document.getElementById('senha_hash').value;
    if (!senha) {
        alert('Digite uma senha para calcular o hash!');
        return;
    }
    const hash = await calcular_hash(senha);
    document.getElementById('hash_result').textContent = hash;
});

//Evento e funcionalidades extras
document.getElementById('gerar').addEventListener('click', senha_gerada);
document.getElementById('validar').addEventListener('click', chamar_validador);
document.getElementById('copiar').addEventListener('click', () => {
    const senha = document.getElementById('senha-gerada').textContent;
    if (senha) {
        navigator.clipboard.writeText(senha);
        alert('Senha copiada para a área de transferência!');
    } 
});

