export const addToTeam = (hero, team, setTeam) => {
  const calculateTeamAlignment = (aligment) => {
    return team.filter((member) => member.biography.alignment === aligment).length
  }

  let isMember = false
  team.forEach((member) => {
    if (member.id === hero.id) {
      isMember = true
    }
  })

  if (team.length === 6) {
    alert('the team can only have up to 6 members!')
  } else if (isMember) {
    alert('superhero is already part of the team!')
  } else if (calculateTeamAlignment('bad') === 3 && hero.biography.alignment === 'bad') {
    alert('you can add up to three bad members!')
  } else if (
    calculateTeamAlignment('good') === 3 &&
    hero.biography.alignment === 'good'
  ) {
    alert('you can add up to three good members')
  } else {
    setTeam([...team, hero])
  }
}
