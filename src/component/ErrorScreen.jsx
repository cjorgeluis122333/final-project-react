// components/ErrorScreen.js

export default function ErrorScreen({ message, onRetry }) {
    return (
        <div style={{ padding: '2rem', textAlign: 'center', color: 'red' }}>
            <h2>Error al cargar los estudiantes</h2>
            <p>{message}</p>
            <button onClick={onRetry} style={{ marginTop: '1rem' }}>
                Reintentar
            </button>
        </div>
    );
}
