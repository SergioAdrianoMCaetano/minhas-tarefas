import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../util/enums/Tarefa'

type FiltroState = {
  termo: string
  criterio: 'prioridade' | 'status' | 'todas'
  valor?: enums.Prioridade | enums.Status
}

const initialState: FiltroState = {
  termo: '',
  criterio: 'todas'
}

const FiltroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarTermo: (state, action: PayloadAction<string>) => {
      state.termo = action.payload
    }
  }
})

export const { alterarTermo } = FiltroSlice.actions

export default FiltroSlice.reducer
