export const usuarioAutenticado = () => localStorage.getItem('softX.webApi') !== null;

export const parseJwt = () => {
    //DEFINE A VARIAVEL BASE64  E RECEBE A PAYLOAD DECODIFICADO DO USUARIO LOGADO
    let Base64 = localStorage.getItem('softX.webApi').split('.')[1];

    //DECODIFICA A BASE64 PARA STRING, ATRAVES DO METODO A TO B
    //CONVERTE A STRING PARA JSON
    return JSON.parse(window.atob(Base64));
}