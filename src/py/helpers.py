from typing import Dict


def template_to_str(str_template: str, values: Dict) -> str:
    for key in values:
        replace_str = f'\u007b{key}\u007d'  # equivalent to '{key}'
        str_template = str_template.replace(replace_str, values[key])
    return str_template
