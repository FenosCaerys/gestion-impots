export default function Custom500() {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      flexDirection: 'column',
      gap: '16px',
      textAlign: 'center',
      fontFamily: 'system-ui, sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', margin: 0 }}>500</h1>
      <p style={{ margin: 0, color: '#666' }}>Erreur interne du serveur</p>
      <a href="/" style={{
        color: '#0070f3',
        textDecoration: 'none',
        padding: '8px 16px',
        border: '1px solid #0070f3',
        borderRadius: '4px'
      }}>
        Retour à l'accueil
      </a>
    </div>
  )
}
