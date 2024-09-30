let votes = {
    "Sachin Tendulkar": 0,
    "Brian Lara": 0,
    "Ricky Ponting": 0,
    "Jacques Kallis":0,
    "Shane Warne":0,
    "Muttiah Muralitharan":0,
    "Virat Kohli":0,
    "AB de Villiers":0,
    "Wasim Akram":0,
    "Glenn McGrath":0,
    "MS Dhoni":0,
    "Kumar Sangakkara":0,
    "Viv Richards":0,
  };
  function submitvote() {
    const selectedPlayer = document.querySelector('input[name="player"]:checked');
    if (selectedPlayer) {
        const playerName = selectedPlayer.value;
        votes[playerName]++;
        document.getElementById("thankYouMessage").style.display = "block";
        setTimeout(() => {
            document.getElementById("thankYouMessage").style.display = "none";
        }, 3000);
        document.getElementById("votingForm").reset();
        document.querySelectorAll('input[name="player"]').forEach(input => input.disabled = true);
        document.getElementById("submitVote").disabled = true;
    } else {
        alert("Please select a player before submitting your vote.");
    }
  }
  document.querySelectorAll('input[name="player"]').forEach(input => {
    input.addEventListener('change', function() {
        document.querySelectorAll('li').forEach(li => li.classList.remove('selected'));
        this.parentElement.classList.add('selected');
    });
  });