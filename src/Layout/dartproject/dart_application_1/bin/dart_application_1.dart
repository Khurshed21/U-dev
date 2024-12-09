
void main() {

var user = User()..age = 12..name= 'nek'..isPassword = true;

print('Name: ${user.name} ');
print('Age: ${user.age} ');
print('Password: ${user.isPassword} ');

}

class User {
  String name = 'saa';
  int age = 11;
  bool isPassword = false;
}