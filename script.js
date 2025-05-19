
console.log("Script está carregando!");

document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM completamente carregado");
    
    // Verifica se os elementos existem
    console.log("Formulário:", document.getElementById('character-form'));
    console.log("Modal:", document.getElementById('saveModal'));
});
document.getElementById("character-form")?.addEventListener("submit", function (e) {
    e.preventDefault();
    openSaveModal();
  });
  
  // Funções para o modal de salvar
  function openSaveModal() {
    const modal = document.getElementById('saveModal');
    modal.style.display = 'flex';
  }
  
  function closeSaveModal() {
    const modal = document.getElementById('saveModal');
    modal.style.display = 'none';
  }
  
  // Fechar modal ao clicar no X ou fora
  document.querySelector('.close-modal')?.addEventListener('click', closeSaveModal);
  window.addEventListener('click', (e) => {
    if (e.target === document.getElementById('saveModal')) {
      closeSaveModal();
    }
  });
  
  // Opções de salvamento
  document.getElementById('savePdf')?.addEventListener('click', () => {
    alert('Gerando PDF... (esta é uma simulação)');
    // Aqui você implementaria a geração real do PDF
    // Pode usar bibliotecas como jsPDF ou html2pdf.js
    closeSaveModal();
  });
  
  document.getElementById('shareLink')?.addEventListener('click', () => {
    alert('Link compartilhável gerado! (esta é uma simulação)');
    // Aqui você implementaria a lógica para gerar um link compartilhável
    // Pode ser um link com os dados codificados ou salvar no backend
    closeSaveModal();
  });
  
  document.getElementById('saveLocal')?.addEventListener('click', () => {
    saveCharacter();
    closeSaveModal();
  });
  
  // Função para salvar localmente
  function saveCharacter() {
    const characterData = {
      name: document.getElementById('name').value,
      attributes: {
        strength: document.getElementById('strength').value,
        magic: document.getElementById('magic').value,
        // Adicione todos os outros campos aqui
      },
      // Inclua todos os outros dados do formulário
    };
    
    localStorage.setItem('lastCharacter', JSON.stringify(characterData));
    alert('Personagem salvo localmente com sucesso!');
  }
  
  // Funções existentes
  function loadCharacter() {
    const savedCharacter = localStorage.getItem('lastCharacter');
    if (savedCharacter) {
      const character = JSON.parse(savedCharacter);
      // Preencha os campos do formulário com os dados salvos
      document.getElementById('name').value = character.name;
      document.getElementById('strength').value = character.attributes.strength;
      // Preencha todos os outros campos
      alert('Personagem carregado com sucesso!');
    } else {
      alert('Nenhum personagem salvo encontrado.');
    }
  }
  
  function exitGame() {
    if (confirm("Deseja realmente sair do jogo?")) {
      window.location.href = "index.html";
    }
  }
  document.addEventListener('DOMContentLoaded', function() {
    // Formulário principal
    const form = document.getElementById('character-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            openSaveModal();
        });
    }

    // Funções do Modal
    function openSaveModal() {
        const modal = document.getElementById('saveModal');
        if (modal) {
            modal.style.display = 'flex';
        }
    }

    function closeSaveModal() {
        const modal = document.getElementById('saveModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    // Event Listeners
    document.querySelector('.close-modal')?.addEventListener('click', closeSaveModal);
    
    window.addEventListener('click', function(e) {
        if (e.target === document.getElementById('saveModal')) {
            closeSaveModal();
        }
    });

    // Opções de salvamento
    document.getElementById('savePdf')?.addEventListener('click', function() {
        alert('PDF será gerado aqui!');
        closeSaveModal();
    });
    
    document.getElementById('shareLink')?.addEventListener('click', function() {
        alert('Link será compartilhado aqui!');
        closeSaveModal();
    });
    
    document.getElementById('saveLocal')?.addEventListener('click', function() {
        saveCharacter();
        closeSaveModal();
    });

    // Função para salvar localmente
    function saveCharacter() {
        try {
            const characterData = {
                name: document.getElementById('name').value,
                attributes: {
                    strength: document.getElementById('strength').value,
                    magic: document.getElementById('magic').value,
                    agility: document.getElementById('agility').value,
                    charisma: document.getElementById('charisma').value,
                    intellect: document.getElementById('intellect').value,
                    vigor: document.getElementById('vigor').value
                },
                inventory: document.getElementById('inventory').value
                // Adicione outros campos conforme necessário
            };
            
            localStorage.setItem('lastCharacter', JSON.stringify(characterData));
            alert('Personagem salvo localmente com sucesso!');
        } catch (error) {
            console.error('Erro ao salvar personagem:', error);
            alert('Ocorreu um erro ao salvar o personagem.');
        }
    }
});

// Funções existentes
function loadCharacter() {
    alert("Função de carregamento ainda será implementada.");
}

function exitGame() {
    if (confirm("Deseja realmente sair do jogo?")) {
        window.location.href = "index.html";
    }
}
document.getElementById('savePdf')?.addEventListener('click', function() {
    const element = document.getElementById('character-form');
    const opt = {
        margin: 10,
        filename: 'ficha_personagem.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
    closeSaveModal();
});

document.getElementById('shareLink')?.addEventListener('click', function() {
    const characterData = {
        name: document.getElementById('name').value,
        race: document.getElementById('race').value,
        class: document.getElementById('class').value,
        // Adicione outros campos importantes
    };
    
    const encodedData = btoa(JSON.stringify(characterData)); // Converte para base64
    const shareLink = `${window.location.href}?data=${encodedData}`;
    
    // Copia para a área de transferência
    navigator.clipboard.writeText(shareLink).then(() => {
        alert('Link copiado! Cole e compartilhe com seus amigos!');
    }).catch(() => {
        prompt('Copie este link manualmente:', shareLink);
    });
    
    closeSaveModal();
});
function loadCharacter() {
    // Verifica se há uma ficha salva
    if (localStorage.getItem('lastCharacter')) {
      // Redireciona para a página de ficha com parâmetro de carregamento
      window.location.href = 'ficha.html?load=true';
    } else {
      alert('Nenhuma ficha encontrada. Crie uma nova ficha primeiro.');
    }
  }
  
  function exitGame() {
    if (confirm("Deseja realmente sair do jogo?")) {
      window.location.href = "index.html";
    }
  }
  // Função para mostrar fichas salvas
document.getElementById('loadButton').addEventListener('click', function() {
    const savedSheets = document.getElementById('savedSheets');
    const sheetList = document.getElementById('savedSheetsList');
    
    // Alternar visibilidade
    if (savedSheets.style.display === 'none') {
      savedSheets.style.display = 'block';
      loadSavedSheetsList();
    } else {
      savedSheets.style.display = 'none';
    }
  });
  
  // Carrega a lista de fichas salvas
  function loadSavedSheetsList() {
    const sheetList = document.getElementById('savedSheetsList');
    sheetList.innerHTML = '';
    
    // Recupera todas as fichas salvas
    const savedSheets = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith('ficha_')) {
        const sheetData = JSON.parse(localStorage.getItem(key));
        savedSheets.push({
          id: key,
          name: sheetData.name || 'Ficha sem nome',
          data: sheetData
        });
      }
    }
    
    // Exibe as fichas
    if (savedSheets.length === 0) {
      sheetList.innerHTML = '<li>Nenhuma ficha encontrada</li>';
    } else {
      savedSheets.forEach(sheet => {
        const li = document.createElement('li');
        li.innerHTML = `
          <span class="sheet-name">${sheet.name}</span>
          <button onclick="loadSheet('${sheet.id}')">Abrir</button>
          <button onclick="deleteSheet('${sheet.id}')">Excluir</button>
        `;
        sheetList.appendChild(li);
      });
    }
  }
  
  // Carrega uma ficha específica
  function loadSheet(sheetId) {
    const sheetData = JSON.parse(localStorage.getItem(sheetId));
    // Armazena temporariamente para a página de ficha
    sessionStorage.setItem('currentSheet', JSON.stringify(sheetData));
    window.location.href = 'ficha.html';
  }
  
  // Exclui uma ficha
  function deleteSheet(sheetId) {
    if (confirm('Tem certeza que deseja excluir esta ficha?')) {
      localStorage.removeItem(sheetId);
      loadSavedSheetsList();
    }
  }
  
  // Função existente para sair
  function exitGame() {
    if (confirm("Deseja realmente sair do jogo?")) {
      window.location.href = "index.html";
    }
  }
  function saveCharacter() {
    const characterData = {
      id: 'ficha_' + Date.now(),  // ID único
      name: document.getElementById('name').value,
      // todos os outros campos...
    };
    
    localStorage.setItem(characterData.id, JSON.stringify(characterData));
    alert('Ficha salva com sucesso!');
  }
  function saveCharacter() {
    const characterData = {
      name: document.getElementById('name').value,
      gender: document.getElementById('gender').value,
      birthYear: document.getElementById('birth-year').value,
      age: document.getElementById('age').value,
      race: document.getElementById('race').value,
      class: document.getElementById('class').value,
      school: document.getElementById('school').value,
      kingdom: document.getElementById('kingdom').value,
      origin: document.getElementById('origin').value,
      strength: document.getElementById('strength').value,
      magic: document.getElementById('magic').value,
      agility: document.getElementById('agility').value,
      charisma: document.getElementById('charisma').value,
      intellect: document.getElementById('intellect').value,
      vigor: document.getElementById('vigor').value,
      inventory: document.getElementById('inventory').value,
      createdAt: new Date().toISOString()
    };
  
    // Usa o nome como parte do ID (substitui espaços por underscores)
    const characterId = 'ficha_' + characterData.name.toLowerCase().replace(/\s+/g, '_');
    
    localStorage.setItem(characterId, JSON.stringify(characterData));
    alert('Ficha salva com sucesso!');
  }
  function returnToMenu() {
    if (confirm('Deseja retornar ao menu principal? Todos os dados não salvos serão perdidos.')) {
      window.location.href = 'menu.html';
      
    }
  }
  // Elementos
const vidaInput = document.getElementById('vida-input');
const manaInput = document.getElementById('mana-input');
const sanidadeInput = document.getElementById('sanidade-input');
const energiaInput = document.getElementById('energia-input');

// Barras
const vidaBar = document.getElementById('vida-bar');
const manaBar = document.getElementById('mana-bar');
const sanidadeBar = document.getElementById('sanidade-bar');
const energiaBar = document.getElementById('energia-bar');

// Mensagens
const vidaStatus = document.getElementById('vida-status');
const manaStatus = document.getElementById('mana-status');
const sanidadeStatus = document.getElementById('sanidade-status');
const energiaStatus = document.getElementById('energia-status');

// Função para atualizar uma barra
function atualizarBarra(input, bar, statusElement, mensagem) {
  const valor = parseInt(input.value) || 0;
  const max = parseInt(input.getAttribute('data-max')) || valor || 1; // Evita divisão por zero
  
  // Atualizar barra
  const porcentagem = (valor / max) * 100;
  bar.style.width = porcentagem + '%';
  
  // Verificar se está zerado
  if (valor <= 0) {
    bar.style.backgroundColor = '#8B0000'; // Vermelho escuro para crítico
    statusElement.textContent = mensagem;
  } else {
    statusElement.textContent = '';
    // Restaurar cor original (definida no HTML)
    const corOriginal = bar.style.backgroundColor;
    bar.style.backgroundColor = corOriginal;
  }
}

// Ouvintes de evento para cada input
vidaInput.addEventListener('input', () => {
  atualizarBarra(vidaInput, vidaBar, vidaStatus, 'MORRENDO!');
});

manaInput.addEventListener('input', () => {
  atualizarBarra(manaInput, manaBar, manaStatus, 'SEM MANA!');
});

sanidadeInput.addEventListener('input', () => {
  atualizarBarra(sanidadeInput, sanidadeBar, sanidadeStatus, 'LOUCO!');
});

energiaInput.addEventListener('input', () => {
  atualizarBarra(energiaInput, energiaBar, energiaStatus, 'EXAUSTO!');
});

// Inicializar barras
atualizarBarra(vidaInput, vidaBar, vidaStatus, 'MORRENDO!');
atualizarBarra(manaInput, manaBar, manaStatus, 'SEM MANA!');
atualizarBarra(sanidadeInput, sanidadeBar, sanidadeStatus, 'LOUCO!');
atualizarBarra(energiaInput, energiaBar, energiaStatus, 'EXAUSTO!');

if (valorAtual <= 0) {
    barra.classList.add('critical'); // Adiciona a classe crítica
    // ... restante do código
} else {
    barra.classList.remove('critical'); // Remove a classe crítica
    // ... restante do código
}
