import Post from "./components/Post";
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      {}
      <Post imageUrl="https://limahobbies.vteximg.com.br/arquivos/ids/226341/Miniatura-Batmovel-Batman-Classic-TV-Series-1966-c--4-Figuras-1-24-Jada-Toys-33737.jpg?v=638549307787500000">
        Olha só que legal minha miniatura do Batmóvel.
      </Post>

      {}
      <Post imageUrl="https://s2-autoesporte.glbimg.com/7BFV6GWsvJyQdgzmTrfkFtmkicc=/0x0:1920x1041/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_cf9d035bf26b4646b105bd958f32089d/internal_photos/bs/2022/6/X/VtkMgIRMA3B5Dk75xvxA/1989-batmobile-original-prop-is-for-sale-costs-more-than-a-few-replicas-203169-1.jpg">
        Aqui está o Batmóvel da versão de 1989 em alta qualidade!
      </Post>
    </div>
  );
}

export default App;
