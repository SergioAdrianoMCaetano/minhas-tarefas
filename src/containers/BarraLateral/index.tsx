import FiltroCard from '../../components/FiltroCard'

import * as S from './styles'

const BarraLateral = () => (
  <S.Aside>
    <div>
      <S.Campo type="text" placeholder="Buscar" />
      <S.Filtros>
        <FiltroCard legenda="pendente" contador={1} />
        <FiltroCard legenda="concluída" contador={2} />
        <FiltroCard legenda="urgente" contador={4} />
        <FiltroCard legenda="importante" contador={5} />
        <FiltroCard legenda="normal" contador={7} />
        <FiltroCard legenda="todas" contador={10} ativo />
      </S.Filtros>
    </div>
  </S.Aside>
)

export default BarraLateral
