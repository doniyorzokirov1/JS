var poll
var name
var lastname
var age
var nationality
var sex
var phone
var live
var Work0rStudy
var marry

// ///////////////////

// IF
function myFunction() {
  if (confirm('Hello ! Do you want to study in our education ?')) {
    alert('Hello ! We will fill out a questionnaire with you now (: ')
    name = prompt('What is your name ?')
    lastname = prompt(name + ', ' + 'What is your lastname ?')
    age = prompt(name + ' ' + lastname + ', ' + 'How old are you ?')
    nationality = prompt('Where are you from ?')
    sex = prompt('Male or Female ?')
    phone = prompt(
      name + ' ' + lastname + ', ' + 'Can you share your phone number ?',
    )
    live = prompt(
      'Where do you live of ' +
        nationality +
        ' or another country at the moment ?',
    )
    Work0rStudy = prompt('worker or student ?')
    marry = prompt('Are you married ?')

    // ALERT
    alert(
      'Name: ' +
        name +
        '\n' +
        'Lastname: ' +
        lastname +
        '\n' +
        'Age: ' +
        age +
        '\n' +
        'Where: ' +
        nationality +
        '\n' +
        'Gender: ' +
        sex +
        '\n' +
        'Phone number: ' +
        phone +
        '\n' +
        'Current residence: ' +
        live +
        '\n' +
        'Worker or student: ' +
        Work0rStudy +
        '\n' +
        'Married: ' +
        marry,
    )

    // CONFIRM
    confirm('Are your information properly filled in ?')

  }

  // ELSE
  else {
    alert('Bye Bye')
  }
}
