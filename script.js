let usuario;
let senha;
let tipo;
let respostaDiv;

// Atualizar exibição com base na query string
function atualizarExibicao() {
  const params = new URLSearchParams(window.location.search);
  document.getElementById('username').value = params.get('username') || '';
  document.getElementById('password').value = params.get('password') || '';
  document.getElementById('tipo').value = params.get('tipo') || '';
}

// Enviar dados e atualizar a URL
function enviarDados() {
  usuario = document.getElementById('username').value.trim();
  senha = document.getElementById('password').value;
//   tipo = document.getElementById('tipo').value;


  if (!usuario || !senha) {
    Alert('Por favor, preencha o nome e a senha.');
    return;
  }

  if (!tipo) {
    showAlert('Por favor, selecione um perfil de usuário.');
    return;
  }
  const url = new URL(window.location.href);
      url.searchParams.set('usuario', usuario);
      url.searchParams.set('senha', senha);
      url.searchParams.set('tipo', tipo);
      window.history.pushState({}, '', url);

      respostaDiv.textContent = "Dados enviados com sucesso!";

  // Se quiser fazer algo com esses dados, coloque aqui.
}

// Atualiza a exibição ao carregar a página
window.onload = atualizarExibicao;

// Animação "reveal"
const items = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target); // só uma vez
    }
  });
}, { threshold: 0.5 });

items.forEach(item => observer.observe(item));
