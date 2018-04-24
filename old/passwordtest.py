phash = hash(input('Enter your password: '))
print('Welcome to the system.')
print('list of variables: ')
print(globals())
if phash == hash(input('Enter login password: ')):
  print('access granted')
else:
  print('access denied')