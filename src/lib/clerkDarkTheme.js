// Clerk appearance customization — dark theme alineado con paleta --sesa-* de index.css
export const clerkDarkTheme = {
  variables: {
    colorBackground: '#1e2c38', // fondo oscuro de la card de Clerk
    colorInputBackground: '#ffffff05', // --sesa-dark-input-bg
    colorInputText: '#ffffff', // --sesa-dark-text
    colorText: '#ffffff', // --sesa-dark-text
    colorTextSecondary: '#ffffff99', // --sesa-dark-text-muted
    colorPrimary: '#f81939', // --sesa-accent
    colorDanger: '#ff6b6b', // --sesa-danger
    borderRadius: '8px',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontSize: '15px',
  },
  elements: {
    rootBox: { flex: '1 1 auto', minWidth: 0, maxWidth: '640px' },
    card: {
      background: '#ffffff0f', // --sesa-dark-surface
      border: '1px solid #ffffff1f', // --sesa-dark-border
      boxShadow: '0 8px 32px #00000066', // --sesa-dark-shadow
      borderRadius: '8px',
      padding: '48px',
      width: '100%',
    },
    headerTitle: { display: 'none' },
    headerSubtitle: { display: 'none' },
    // Footer — visible con estilo dark (links "¿Ya tienes cuenta?" / "¿No tienes cuenta?")
    footer: { borderTop: '1px solid #ffffff1a', paddingTop: '20px', marginTop: '4px' },
    footerActionText: { color: '#ffffff80' }, // --sesa-dark-text-soft
    footerActionLink: { color: '#ffffff', fontWeight: '600' },
    // Divider "or"
    dividerText: { color: '#ffffff4d' }, // --sesa-dark-text-faint
    dividerLine: { background: '#ffffff1a' }, // --sesa-dark-divider
    // Google / social button — blanco sobre fondo oscuro
    socialButtonsBlockButton: {
      background: '#ffffff',
      border: 'none',
      color: '#1a1a2e',
    },
    socialButtonsBlockButtonText: { color: '#1a1a2e', fontWeight: '500' },
    // Botón primario
    formButtonPrimary: {
      background: 'linear-gradient(171deg, #f81939 0%, #c41430 100%)',
      boxShadow: '0 4px 16px #f819394d',
    },
    // Inputs
    formFieldInput: {
      background: '#ffffff05', // --sesa-dark-input-bg
      border: '1px solid #ffffff26', // --sesa-dark-input-border
      color: '#ffffff',
    },
    formFieldLabel: { color: '#ffffff', fontWeight: '500' },
    // Icono de mostrar/ocultar contraseña
    formFieldInputShowPasswordButton: { color: '#ffffff80' },
    identityPreviewText: { color: '#ffffff' },
    formResendCodeLink: { color: '#ffffff80' }, // --sesa-dark-text-soft
  },
};
