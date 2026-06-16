export interface ISerie{
  nome: string;
  lancamento: string;
  temporadas: number;
  classificacao: number;
  cartaz: string;
  generos: string[];
  pagina?: string;
  favorito: boolean;
}
