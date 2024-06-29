import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Tarefa from '../../models/Tarefa'
import * as enums from '../../util/enums/Tarefa'

type TarefasState = {
  itens: Tarefa[]
}

const initialState: TarefasState = {
  itens: [
    {
      id: 1,
      descricao:
        'Pegar sol, passear pela quadra,  e socializar com o ambiente e outras crianças.',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Levar WemyZul à quadra'
    },
    {
      id: 2,
      descricao: 'Importar e fazer o deploy no Vercel.',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.CONCLUIDO,
      titulo: 'Entregar "Projeto React"'
    },
    {
      id: 3,
      descricao: 'Abrir gravador de desktop e app do Canvas para edição.',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.PENDENTE,
      titulo: 'Gravar e editar vídeos para as redes sociais'
    },
    {
      id: 4,
      descricao:
        'Apresentar e explicar o passo-a-passo do processo de desenvolvimento do código.',
      prioridade: enums.Prioridade.URGENTE,
      status: enums.Status.CONCLUIDO,
      titulo: 'Criar textos para Post'
    },
    {
      id: 5,
      descricao: 'Concluir os uploads nas redes sociais ainda hoje.',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.PENDENTE,
      titulo: 'Upload nas Redes Sociais'
    },
    {
      id: 6,
      descricao: 'Abrir e iniciar o próximo Projeto.',
      prioridade: enums.Prioridade.IMPORTANTE,
      status: enums.Status.EM_ANDAMENTO,
      titulo: 'EBAC'
    }
  ]
}

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Tarefa>) => {
      const indexDaTarefa = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )

      if (indexDaTarefa >= 0) {
        state.itens[indexDaTarefa] = action.payload
      }
    }
  }
})

export const { remover, editar } = tarefasSlice.actions

export default tarefasSlice.reducer
