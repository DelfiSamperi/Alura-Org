import './Footer.css';

const Footer = () => {
    return (
        <footer className='footer' style={{ backgroundImage: 'url(/img/footer.png)' }} >
            {/* si coloco la imagen de arriba en el css no sabe a donde tiene que ir a buscarla por eso se pone aca*/}
            <div className='redes'>
                <a href='https://www.linkedin.com/in/delfinasamperi/' target='_blank'>
                    <img src='/img/facebook.png' alt='LinkedIn' />
                </a>
                <a href='https://github.com/DelfiSamperi' target='_blank'>
                    <img src='/img/twitter.png' alt='GitHub' />
                </a>
                <a href='https://github.com/DelfiSamperi' target='_blank'>
                    <img src='/img/instagram.png' alt='GitHub' />
                </a>
            </div>
            <img src='/img/Logo.png' alt='org' />
            <strong>Desarrollado por Alura</strong>
        </footer>
    )
}

export default Footer;