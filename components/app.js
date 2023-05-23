export default{
    data(){
        return{
            texto: '',
            textoEncriptado: ''
        }
    },methods:{
        encriptar(){
            let resultado = '';
            const texto = this.texto.toLowerCase();
            for (let i = 0; i < texto.length; i++) {
                let letra = texto[i];
                switch (letra) {
                    case 'e':
                        resultado += 'enter';
                        break;
                    case 'i':
                        resultado += 'imes';
                        break;
                    case 'a':
                        resultado += 'ai';
                        break;
                    case 'o':
                        resultado += 'ober';
                        break;
                    case 'u':
                        resultado += 'ufat';
                        break;
                    default:
                        resultado += letra;
                }
        }
        this.textoEncriptado = resultado;
    },
    desencriptar() {
        let resultado = '';
        const texto = this.textoEncriptado;
        
        for (let i = 0; i < texto.length; i++) {
            let palabra = texto.substr(i, 5);
            switch (palabra) {
                case 'enter':
                    resultado += 'e';
                    i += 4;
                    break;
                case 'imes':
                    resultado += 'i';
                    i += 3;
                    break;
                case 'ai':
                    resultado += 'a';
                    i += 1;
                    break;
                case 'ober':
                    resultado += 'o';
                    i += 3;
                    break;
                case 'ufat':
                    resultado += 'u';
                    i += 3;
                    break;
                default:
                    resultado += texto[i];
            }
        }
        
        this.textoEncriptado = resultado;
    },
    copiarTexton() {
        const textarea = document.createElement('textarea');
        textarea.value = this.textoEncriptado;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('Texto copiado al portapapeles');
    }
    }
}