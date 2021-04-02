import "../styles/global.css"
import {ChallengesProvider} from '../Contexts/ChallendsContext'

function MyApp({ Component, pageProps }) {
//como o countdownProvider depende do Challenges provider, então sempre vem por volta 
// do ChallengeProvider,nesse formato aqui
//   return( 
//     <ChallengesProvider>
//       <CountdownProvider>
//         <Component {...pageProps} />
//       </CountdownProvider>
//     </ChallengesProvider> 
//   )
// }

return( 
  <ChallengesProvider>
      <Component {...pageProps} />
  </ChallengesProvider> 
  //quando cria componente e esse componente recebe conteúdo dentro dele, se chama: children
  //todos os elementos de dentro do provider  vão ter acesso aos dados daquele contexto
)
}
export default MyApp
