export interface StatesProps{
    id: number;
    nome: string;
    sigla: string;
    regiao: {
        id: number;
        nome: string;
        sigla: string;
    }
}

export interface CountieProps{
    id: number;
    nome: string;
    microrregiao:{
        id: number;
        nome: string;
        mesorregiao:{
            id: number;
            nome: string;
            UF: {
                id: number;
                sigla: string;
                nome: string;
                regiao:{
                    id: number;
                    nome: string;
                    sigla: string;
                }
            }
        }
    }
    "regiao-imediata": {
        id: number;
        nome: string;
        "regiao-intermediaria": {
            id: number;
            nome: string;
            UF:{
                id: number;
                nome: string;
                sigla: string;
                regiao:{
                    id: number;
                    nome: string;
                    sigla: string;
                }
            }
        }
    }
}