import Layout from '../components/Layout'

class Page extends React.Component {

  render() {
    return (
      <Layout>
        <div class="container">
          <div class="starter text-center">
            <h1>Bootstrap starter template <i class="fa fa-check"></i></h1>
            <img src='static/images/test-image.jpg' style={{height:100}}></img>
            <p class="lead">Use this project to quickly start your project with React NextJs, Bootstrap, Sass, Fontawesome.<br/>
           
            </p>
          </div>
        </div>
      </Layout>
    )
  }
}

export default Page