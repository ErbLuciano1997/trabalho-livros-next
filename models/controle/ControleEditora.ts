import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: 'A' },
  { codEditora: 2, nome: 'B' },
  { codEditora: 3, nome: 'C' },
];

class ControleEditora {
  public getEditoras(): Array<Editora> {
    return editoras;
  }

  public getNomeEditora(codEditora: number): string {
    const editora = editoras.filter((e) => e.codEditora === codEditora)[0];
    return editora?.nome || '';
  }
}

export { ControleEditora };
