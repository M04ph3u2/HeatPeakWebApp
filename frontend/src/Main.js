import { useParams } from 'react-router-dom';

function Main() {
    const { query } = useParams();

    return (
        <>
            {query !== "actualworksite" ? (
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: '98vh',
                        background: `url("https://media.tenor.com/hYVsWvkpdrMAAAAC/you-didnt-say-the-magic-word-ah-ah.gif") no-repeat center center fixed`,
                        backgroundSize: 'contain',
                        backgroundPosition: 'center',
                        backgroundAttachment: 'fixed',
                    }}
                />
            ) : (
                <div style={{ backgroundColor: 'orange', height: '60px', display: 'flex', alignItems: 'center', padding: '0 20px' }}>
                    <img src="./logo.svg" alt="Logo" style={{ height: '40px', marginRight: '20px' }} />
                    {/* Aggiungi altri elementi della navbar, come pulsanti o menu, a destra del logo */}
                </div>
            )}
        </>
    );
}

export default Main;