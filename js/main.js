document.getElementById('Checked').addEventListener('click', SwapPrice)



function SwapPrice () {
    IsChecked = document.getElementById('Checked').checked;

    if (IsChecked) {
        BasicMonthly.style.display = 'flex';
        ProfessionalMonthly.style.display = 'flex';
        MasterMonthly.style.display = 'flex';
        BasicAnnually.style.display = 'none';
        ProfessionalAnnually.style.display = 'none';
        MasterAnnually.style.display = 'none';
    }
    else {
        BasicMonthly.style.display = 'none';
        ProfessionalMonthly.style.display = 'none';
        MasterMonthly.style.display = 'none';
        BasicAnnually.style.display = 'flex';
        ProfessionalAnnually.style.display = 'flex';
        MasterAnnually.style.display = 'flex';
    }    
}

