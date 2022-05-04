def append_line(filepath, line):
    file_object = open(filepath, 'a')
    file_object.write("".join(['\n', line, '\n']))
    file_object.close()
