import { IProduct } from './types'

export class Mock {
  /**
   * Apenas para exemplo de uso de uma Promise.
   * @returns
   */
  async getSolutions(): Promise<IProduct[]> {
    return new Promise((resolv, reject) => {
      resolv([
        {
          avatar: 'P1',
          name: 'Nome do Projeto #1',
          description: 'Descrição do projeto #1',
          features: ['Feature 1', 'Feature 4', 'Feature 3'],
        },
        {
          avatar: 'P2',
          name: 'Nome do Projeto #2',
          description: 'Descrição do projeto #2',
          features: ['Feature 1', 'Feature 4', 'Feature 3'],
        },

        {
          avatar: 'P3',
          name: 'Nome do Projeto #3',
          description: 'Descrição do projeto #3',
          features: ['Feature 1', 'Feature 4', 'Feature 3'],
        },
        {
          avatar: 'P4',
          name: 'Nome do Projeto #4',
          description: 'Descrição do projeto #4',
          features: ['Feature 1', 'Feature 4', 'Feature 3'],
        },
      ])
    })
  }
}
