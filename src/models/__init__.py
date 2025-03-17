"""
Models for the web scraping task distribution system
"""

from src.models.enums import TaskStatus, WorkerStatus, DistributionStrategy
from src.models.task import Task
from src.models.worker import Worker
from src.models.task_result import TaskResult

__all__ = [
    'TaskStatus', 
    'WorkerStatus', 
    'DistributionStrategy', 
    'Task', 
    'Worker', 
    'TaskResult'
] 