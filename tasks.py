# tasks.py

from invoke import task

@task
def test(ctx):
    ctx.run("python -m unittest discover tests")

@task
def build(ctx):
    # Add build steps here
    pass

@task
def deploy(ctx):
    # Add deployment steps here
    pass