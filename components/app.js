export default{
    data() {
        return {
            inputText: '',
            encryptedText: '',
            decryptedText: '',
            mensaje: '',
        }
    }, methods: {
        encriptado() {
            this.decryptedText = "";
            let text = this.inputText.toLowerCase();
            text = text.replace(/e/g, 'enter');
            text = text.replace(/i/g, 'imes');
            text = text.replace(/a/g, 'ai');
            text = text.replace(/o/g, 'ober');
            text = text.replace(/u/g, 'ufat');
            this.encryptedText = text;
            this.mensaje = 'Texto encriptado:'
        },
        Desencriptado() {
            this.encryptedText = "";
            let text = this.inputText.toLowerCase();
            text = text.replace(/ufat/g, 'u');
            text = text.replace(/ober/g, 'o');
            text = text.replace(/ai/g, 'a');
            text = text.replace(/imes/g, 'i');
            text = text.replace(/enter/g, 'e');
            this.decryptedText = text;
            this.mensaje = 'Texto desencriptado:'

        },
        limpiar() {
            this.encryptedText = "";
            this.decryptedText = "";
        }
    }
}